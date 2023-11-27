import express from "express";
const router = express.Router();

import index from "../controllers";

router.get("/", index);

export default router;
