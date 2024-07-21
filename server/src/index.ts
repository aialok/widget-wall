import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import userRoutes from "./routes/user.js";
import { errorMiddleware } from "./midddlewares/error.js";
import poleRoutes from "./routes/poles.js";
import cors from "cors";
import linkRoutes from './routes/link.js'
import announcementRoutes from './routes/announcement.js'
import { transformSheetData } from "./utils/filter-data.js"
import sheetRoutes from "./routes/sheet.js";

const app = express();

config({
  path: "./.env",
});
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());
// routes her
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/pole", poleRoutes);
app.use("/api/v1/link", linkRoutes);
app.use("/api/v1/announcement", announcementRoutes);


app.post("/googleSheets", (req: Request, res: Response, next: NextFunction) => {
  try {
    const rawData = req.body;
    const transformedData = transformSheetData(rawData);
    console.log(transformedData);
    res.json(transformedData);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the data" });
  }
});
app.use("/api/v1/googleSheets", sheetRoutes);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
    return res.status(200).json({
      success: true,
      message : "Server health check passed"
    })
});

// error middleware
app.use(errorMiddleware);
app.listen(port, () => {
  console.log(`server is running on localhost ${port}`);
});
