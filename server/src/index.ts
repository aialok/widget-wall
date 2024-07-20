import express, { NextFunction, Request, Response } from "express"
import {config} from "dotenv"

const app = express();

config({
    path: './.env'
})
const port =process.env.PORT || 4000;


app.listen(port,()=>{
    console.log(`server is running on localhost ${port}`)
})