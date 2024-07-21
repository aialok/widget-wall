import express, { Request,Response } from "express";
import { CreatePoll, getAllPolls,getPollById, voteOnPoll, } from "../controllers/poll";
const app = express.Router();

app.post('/',CreatePoll)
app.get('/',getAllPolls)
app.get('/:id', getPollById);
app.post('/vote',voteOnPoll)



export default app;