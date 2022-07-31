import { Router } from "express";
import { getStories, createStory } from "../controllers/stories.js";

const router = Router();

//Listening methods on localhost:3001/stories/
router.get("/", getStories);
router.post("/", createStory);

export default router;