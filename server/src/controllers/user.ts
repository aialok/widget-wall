import { TryCatch } from "../midddlewares/error";
import { PrismaClient } from "@prisma/client";
import ErrorHandler from "../utils/utility-class";

const prisma = new PrismaClient()

export const createProfile=TryCatch(
    async(req,res,next)=>{
        console.log('i am here')
        const {
            userId,name,imageUrl,
            email,
        }= req.body

        console.log(req.body)

        if(!userId || !name || !imageUrl || !email ){
            return next(new ErrorHandler('bad request: missign filed',404))
        }

        let profile = await prisma.profile.findUnique({
            where:{
                userId:userId
            }
        })

        if(!profile){
            profile = await prisma.profile.create({
                data:{
                  userId,
                  name,
                  imageUrl,
                  email,
                }
            });
        }
        return res.status(200).json({
            message:"created profile",
            data:profile

        })

    }
)