import express, { Request,Response } from "express";
import { createProfile } from "../controllers/user";
const app = express.Router();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


app.post('/',async(
    req,res,next
)=>{
    try{
        const {description}= req.body
        if(!description){
            return res.status(404).json({
                success:false ,
                message:"bad request"
            })
        }
        const announcemnt =await  prisma.announcement.create({
            data:{
                description
            }
        })

        return res.status(200).json({
            data:announcemnt,
            success:true
        })


    }catch(error){
        console.log(error)
        return res.status(500).json({
            data:null,
            success:false
        })
        

    }
})


// Get all announcements
app.get('/', async (req: Request, res: Response) => {
    try {
        const announcements = await prisma.announcement.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        return res.status(200).json({
            data: announcements,
            success: true
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            data: null,
            success: false,
            message: "Internal server error"
        });
    }
});
export default app;