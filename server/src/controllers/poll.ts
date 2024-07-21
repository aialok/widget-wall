import { PrismaClient } from "@prisma/client";
import ErrorHandler from "../utils/utility-class";
import { TryCatch } from "../midddlewares/error";

const prisma = new PrismaClient();

export const CreatePoll = TryCatch(
    async (req, res, next) => {
        const { question, options } = req.body;


        if (!question || !options  || options.length === 0) {
            return next(new ErrorHandler('Bad request: missing fields or options must be a non-empty array', 400));
        }

        try {
            const poll = await prisma.poll.create({
                data: {
                    question,
                    options: {
                        create: options.map((option: any) => ({ option }))
                    }
                },
                include: {
                    options: true
                }
            });


            return res.status(200).json({
                message: "Poll created successfully",
                data: poll
            });
        } catch (error) {
            console.error("Error creating poll:", error); // Debugging log
            return next(new ErrorHandler('Internal server error', 500));
        }
    }
);


export const getAllPolls = TryCatch(
    async (req, res, next) => {
            const polls = await prisma.poll.findMany({
                include: {
                    options: true
                }
            });

            if (!polls || polls.length === 0) {
                return next(new ErrorHandler("Failed to get polls", 404));
            }

            return res.status(200).json({
                data: polls,
                success: true
            });
       
    }
);


export const getPollById = TryCatch(
    async (req, res, next) => {
        const { id } = req.params;

        if (!id) {
            return next(new ErrorHandler('Poll ID is required', 400));
        }

        const poll = await prisma.poll.findUnique({
            where: { id },
            include: {
                options: true
            }
        });

        if (!poll) {
            return next(new ErrorHandler('Poll not found', 404));
        }

        return res.status(200).json({
            data: poll,
            success: true
        });
    }
);


export const voteOnPoll = TryCatch(
    async (req, res, next) => {
        const { pollId, optionId, userId } = req.body;

        if (!pollId || !optionId || !userId) {
            return next(new ErrorHandler('Poll ID, Option ID, and User ID are required', 400));
        }

        try {
            // Check if the poll and option exist
            const poll = await prisma.poll.findUnique({
                where: { id: pollId },
                include: { options: true }
            });

            if (!poll) {
                return next(new ErrorHandler('Poll not found', 404));
            }

            const option = poll.options.find(opt => opt.id === optionId);

            if (!option) {
                return next(new ErrorHandler('Option not found', 404));
            }

            // Check if the user has already voted on this poll
            const existingVote = await prisma.vote.findUnique({
                where: {
                    userId_pollId: {
                        userId: userId,
                        pollId: pollId
                    }
                }
            });

            if (existingVote) {
                return next(new ErrorHandler('User has already voted on this poll', 400));
            }

            // Create a new vote and increment the option's vote count
            const [vote, updatedOption] = await prisma.$transaction([
                prisma.vote.create({
                    data: {
                        userId: userId,
                        pollId: pollId,
                        optionId: optionId
                    }
                }),
                prisma.pollOption.update({
                    where: { id: optionId },
                    data: { votes: { increment: 1 } }
                })
            ]);

            return res.status(200).json({
                message: "Vote recorded successfully",
                data: { vote, updatedOption }
            });
        } catch (error) {
            console.error("Error recording vote:", error);
            return next(new ErrorHandler('Internal server error', 500));
        }
    }
);