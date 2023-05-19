import { Router } from "express";
import {
  Land_sale2,
  getLand,
  getLand_sorting,
  getModal,
  getMortgaga,
  getNews,
  getSingleTrans,

  getUserInfo,
  inheritance_Transfer,
  inheritance_transfer,
  land_Mortgaga,
  land_fragmentation,
  land_fragmentation_trans,
  land_sale,
  land_sorting,
  updateTransaction,
} from "./controller/controller.js";
import { auth } from "../../middleware/auth.js";
import { role } from "../../services/role.js";
import { HME, multerValidation, myMulter } from "../../services/myMulter.js";
const router = Router();

router.post(
  "/create_land_Mortgaga",
  auth([role.user]),
  myMulter(multerValidation.pdf).fields([
    { name: "titleDeed" },
    { name: "userID" },
    { name: "nextID" },
    { name: "legal" },
    { name: "insurance" },
    { name: "book" },
    { name: "request" },
  ]),
  HME,
  land_Mortgaga
);

router.post(
  "/create_land_sale",
  auth([role.user]),
  myMulter(multerValidation.pdf).fields([
    { name: "kushan" },
    { name: "saler" },
    { name: "boughter" },
    { name: "describe" },
    { name: "municipal" },
    { name: "mony" },
    { name: "contract" },
  ]),
  HME,
  land_sale
);

router.post(
  "/create_land_fragmentation",
  auth([role.user]),
  myMulter(multerValidation.pdf).fields([
    { name: "titleDeed" },
    { name: "separeterImage" },
    { name: "sitePlan" },
    { name: "areaChart" },
    { name: "municipal" },
    { name: "money" },
    { name: "transReport" },
    { name: "detectReport" },
    { name: "changeState" },
  ]),
  HME,
  land_fragmentation
);

router.post(
  "/create_tnheritance_transfer",
  auth([role.user]),
  myMulter(multerValidation.pdf).fields([
    { name: "limit" },
    { name: "kushan" },
    { name: "municipal" },
    { name: "money" },
    { name: "imagesOfInhert" },
    { name: "outer" },
  ]),
  HME,
  inheritance_transfer
);

router.post(
  "/create_land_sorting",
  auth([role.user]),
  myMulter(multerValidation.pdf).fields([
    { name: "titleDeed" },
    { name: "separeterImage" },
    { name: "sitePlan" },
    { name: "areaChart" },
    { name: "municipal" },
    { name: "money" },
    { name: "transReport" },
    { name: "detectReport" },
    { name: "changeState" },
    { name: "court" },
    { name: "doBook" },
  ]),
  HME,
  land_sorting
);


router.get("/Mortgaga_trans", auth([role.user]), getMortgaga);
router.get("/land_sale", auth([role.user]), Land_sale2);
router.get("/tnheritance_transfer", auth([role.user]), inheritance_Transfer);
router.get("/land_fragmentation", auth([role.user]), land_fragmentation_trans);
router.get("/land_sorting", auth([role.user]), getLand_sorting);
router.get('/userdata',auth([role.user]),getUserInfo)
router.get('/getland', auth([role.user]), getLand)
router.get('/:type/:id',auth([role.user,role.employee]),getSingleTrans)

router.patch(
  "/transaction/:type",
  auth([role.user]),
  myMulter(multerValidation.pdf).single("img"),HME,
  updateTransaction
);
router.get('/getNew',auth([role.user,role.employee]),getNews)

router.get('/getmodal',auth([role.user]),getModal)
export default router;
