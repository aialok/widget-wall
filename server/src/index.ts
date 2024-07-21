import express, { NextFunction, Request, Response } from "express";
import { config } from "dotenv";
import userRoutes from "./routes/user.js";
import { errorMiddleware } from "./midddlewares/error.js";
import poleRoutes from './routes/poles.js'
import cors from "cors";

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


app.post("/googleSheets", (req: Request, res: Response, next: NextFunction) => {
  try {
    const rawData = req.body.allData;
    const processedData = rawData[0].reduce(
      (acc: any, header: string, index: number) => {
        acc[header] = rawData.slice(1).map((row: any[]) => row[index] || "");
        return acc;
      },
      {}
    );
    console.log(processedData);
    res.json(processedData);
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .json({ error: "An error occurred while processing the data" });
  }
});

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url);
  res.send("Hello World");
});

// error middleware
app.use(errorMiddleware);
app.listen(port, () => {
  console.log(`server is running on localhost ${port}`);
});
