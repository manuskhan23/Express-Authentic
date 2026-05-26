import express, { Application, Request, Response } from "express";
import authRoutes from "./routes/auth.routes.js";

const app: Application = express();

app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Welcome to express-authentic API"
  });
});

app.use("/api/auth", authRoutes);

export default app;