import express, { Application, Request, Response } from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/error-handler";

const app: Application = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "skill bridge app is running!..",
  });
});

app.get("/error-test", () => {
  throw new Error("Test Error");
});

app.use(errorHandler);

export default app;
