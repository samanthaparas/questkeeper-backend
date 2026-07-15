import express from "express";
import { getSpells } from "../controllers/spellsController.js";

const router = express.Router();

router.get("/", getSpells);

export default router;
