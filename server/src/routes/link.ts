import express, { Request,Response } from "express";
import { createProfile } from "../controllers/user";
const app = express.Router();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();


app.post('/',async(
    req,res,next
)=>{
    try{
        const {link}= req.body
        if(!link){
            return res.status(404).json({
                success:false ,
                message:"bad request"
            })
        }
        const linkBody =await  prisma.link.create({
            data:{
                link
            }
        })

        return res.status(200).json({
            data:linkBody,
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
        const linkBody = await prisma.link.findMany({
           
        });

        return res.status(200).json({
            data: linkBody,
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