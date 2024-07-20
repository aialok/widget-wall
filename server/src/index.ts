import express, { NextFunction, Request, Response } from "express"
import {config} from "dotenv"
import userRoutes from './routes/user.js'
import { errorMiddleware } from "./midddlewares/error.js";
import cors from 'cors'


const app = express();

config({
    path: './.env'
})
const port =process.env.PORT || 4000;

app.use(express.json())
app.use(cors())
// routes her 
app.use("/api/v1/user",userRoutes)

// error middleware
app.use(errorMiddleware)
app.listen(port,()=>{
    console.log(`server is running on localhost ${port}`)
})