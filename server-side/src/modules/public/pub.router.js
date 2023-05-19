import { Router } from "express";
import {
  AddCitizen,
  AddMuni,
  AddOuter,
  AddSurvy,
  AddTax,
  AddlandMuni,
  getMuni,
  getOuter,
  getSurvy,
  getTax,
  getUser,
  getlandMuni,
} from "./controller/controller.js";
import { HME, multerValidation, myMulter } from "../../services/myMulter.js";
import { role } from "../../services/role.js";
import { auth } from "../../middleware/auth.js";
const router = Router();
router.post(
  "/adduser",
  myMulter(multerValidation.image).single("img"),
  HME,
  AddCitizen
);
router.get("/getintier/:id", auth([role.admin, role.employee]), getUser);
router.post(
  "/addouter",
  myMulter(multerValidation.image).single("img"),
  HME,
  AddOuter
);
router.get("/getouter/:id", getOuter);
router.post(
  "/addtax",
  myMulter(multerValidation.image).single("img"),
  HME,
  AddTax
);
router.get("/gettax/:id", auth([role.admin, role.employee]), getTax);

router.post(
  "/addsurvy",
  myMulter(multerValidation.image).single("img"),
  HME,
  auth([role.admin, role.employee]),
  AddSurvy
);
router.post("/getsurvy", getSurvy);

router.post(
  "/addmuni",
  myMulter(multerValidation.image).single("img"),
  HME,
  AddMuni
);
router.get("/getmuni/:id", auth([role.admin, role.employee]), getMuni);

router.post(
  "/addlandmuni/:id",
  myMulter(multerValidation.pdf).fields([{ name: "img1" }, { name: "img2" }]),
  HME,
  AddlandMuni
);
router.post("/getlandmuni", auth([role.admin, role.employee]), getlandMuni);
export default router;
