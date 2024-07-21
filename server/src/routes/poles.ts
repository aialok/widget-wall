import express, { Request,Response } from "express";
import { CreatePoll } from "../controllers/poll";
const app = express.Router();

app.post('/',CreatePoll)
export default app;