import express, { Request,Response } from "express";
import { createProfile } from "../controller.ts/user";
const app = express.Router();

// app.use('/',(req:Request,res:Response)=>{
//     res.send('teri ma bhen')
// })
app.post('/',createProfile)
export default app;