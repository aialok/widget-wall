import { PrismaClient } from "@prisma/client";
import ErrorHandler from "../utils/utility-class";
import { TryCatch } from "../midddlewares/error";

const prisma = new PrismaClient();

export const CreatePoll = TryCatch(
    async (req, res, next) => {
        const { question, options } = req.body;

        console.log("Request Body:", req.body); // Debugging log

        if (!question || !options  || options.length === 0) {
            console.log("Validation failed"); // Debugging log
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

            console.log("Poll Created:", poll); // Debugging log

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
