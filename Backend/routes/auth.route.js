import express from "express";

import {signup} from "../controller/auth.controller.js"
import { signin } from "../controller/auth.controller.js";
import { google } from "../controller/auth.controller.js";
import {signOut} from  "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get("/signout", signOut)

export default router