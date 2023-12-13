import express from "express";
import problem from "./problem";
import accountsRouter from "./accounts";

const router = express.Router();

router.use("/problem", problem);
router.use("/accountsRouter", accountsRouter);

export default router;
