import { Router } from "express";
import {
  getEmp,
  getEmpforAdmin,
  getTrans,
  giveVacation,
  signup,
} from "./controller/controller.js";
import { signupValidation } from "./controller/mangar.validation.js";
import { validation } from "../../middleware/validation.js";
import { publicRouter } from "../index.router.js";
import { auth } from "../../middleware/auth.js";
import { role } from "../../services/role.js";
const router = Router();

router.use("/internal", publicRouter);
router.post("/signup", validation(signupValidation), signup);
router.get("/getemployee",auth([role.admin]), getEmp);
router.get("/gettrans/:type/:id", auth([role.admin]), getTrans);
//
router.get("/getEmp/:id", auth([role.admin]), getEmpforAdmin);
router.patch('/giveVacation', auth([role.admin]),giveVacation)
export default router;
