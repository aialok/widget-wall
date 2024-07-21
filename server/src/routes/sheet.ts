import express, { Request, Response } from "express";
import { saveGoogleSheetToDB } from "../controllers/google-sheet";
const app = express.Router();

app.post("/", saveGoogleSheetToDB);
export default app;
