import { Router } from "express";
import { changePassword, confirmEmail, sendCode, signIn, veriFyCode } from "./controller/controller.js";
const router = Router();

router.post("/signin", signIn);
router.get("/confirmEmail/:token", confirmEmail);

router.post("/sendCode", sendCode);

//router.post("/signup", signUp);

router.patch("/verifyCode", veriFyCode);

router.patch('/changePassword', changePassword);
export default router;
