import { Router } from "express";
import { role } from "../../services/role.js";
import { validation } from "../../middleware/validation.js";
import {
  createNewsValidation,
  signupValidation,
  updateTransaction,
} from "./controller/employee.validation.js";
import {
  CreateLand,
  CustomFuctionMessage,
  CustomFuctionPaidFees,
  FreezLand,
  LandFragment,
  LandMortgaga,
  LandSale,
  LandSorting,
  addModal,
  addModal2,
  createNews,
  getCustomTrans,
  getInhertTransfer,
  getLandForCitizin,
  getUser,
  signup,
  updateData,
  // updateInheritTransfer,
  // updateInheritTransferFeesDone,
  // updateLandFragmentferFeesDone,
  // updateLandMortgagaFeesDone,
  // updateLandSaleMFeesDone,
  // updateLandsorting,
  // updateLandsortingFeesDone,
  // updatelLandMortgaga,
  // updatelLandSale,
  // updatelandFragmentation,
} from "./controller/controller.js";
import { auth } from "../../middleware/auth.js";
import { HME, multerValidation, myMulter } from "../../services/myMulter.js";
import {
  HMECload,
  myMulterCload,
} from "../../services/myMulterForCloadinary.js";
const router = Router();
router.post(
  "/signup",
  auth([role.employee, role.admin]),
  validation(signupValidation),
  signup
);

router.get(
  "/getInhertTranfer",
  auth([role.employee, role.admin]),
  getInhertTransfer
);
router.get("/getlandFragment", auth([role.employee, role.admin]), LandFragment);
router.get("/getlandmortgaga", auth([role.employee, role.admin]), LandMortgaga);
router.get("/getlandSale", auth([role.employee, role.admin]), LandSale);
router.get("/getlandsorting", auth([role.employee, role.admin]), LandSorting);
//send message with cost
// router.put(
//   "/snedInhertTranfer/:id",
//   auth([role.employee]),
//   validation(updateTransaction),
//   updateInheritTransfer
// );

// router.patch(
//   "/snedInhertTranferfees/:id",
//   auth([role.employee]),
//   updateInheritTransferFeesDone
// );

// router.put(
//   "/snedlandFragmet/:id",
//   auth([role.employee]),
//   validation(updateTransaction),
//   updatelandFragmentation
// );

// router.patch(
//   "/snedlandFragmentfees/:id",
//   auth([role.employee]),
//   updateLandFragmentferFeesDone
// );

// router.put(
//   "/snedlandmortgaga/:id",
//   auth([role.employee]),
//   validation(updateTransaction),
//   updatelLandMortgaga
// );
// router.patch(
//   "/snedlandmortgagafees/:id",
//   auth([role.employee]),
//   updateLandMortgagaFeesDone
// );

// router.put(
//   "/snedlandsale/:id",
//   auth([role.employee]),
//   validation(updateTransaction),
//   updatelLandSale
// );
// router.patch(
//   "/snedlandSalefees/:id",
//   auth([role.employee]),
//   updateLandSaleMFeesDone
// );

// router.put(
//   "/snedlandsorting/:id",
//   auth([role.employee]),
//   validation(updateTransaction),
//   updateLandsorting
// );
// router.patch(
//   "/snedlandsortingfees/:id",
//   auth([role.employee]),
//   updateLandsortingFeesDone
// );

router.post(
  "/create_land",
  myMulter(multerValidation.pdf).single("lands"),
  HME,
  auth([role.employee]),
  CreateLand
);
router.put(
  "/freezLand",
  auth([role.employee]),
  FreezLand
);
router.post('/getLandFor',auth([role.employee]),getLandForCitizin)

router.post(
  "/addNews",
  auth([role.employee, role.admin]),
  validation(createNewsValidation),
  createNews
);

router.post(
  "/addmodal",
  auth([role.employee, role.admin]),
  myMulterCload(multerValidation.image).single("img"),
  HMECload,
  addModal
);

router.get("/trans/:type/:id", auth([role.employee]), getCustomTrans);

router.post(
  "/updatetrans/:type/:id",
  auth([role.employee]),
  CustomFuctionMessage
);
router.post(
  "/updateFeesDone/:type/:id",
  auth([role.employee]),
  CustomFuctionPaidFees
);
router.post("/updateinfor/:id", auth([role.employee]), updateData);
router.get("/getUser/:id", auth([role.employee]), getUser);

router.post("/addmodal2", auth([role.employee]), addModal2);
export default router;
