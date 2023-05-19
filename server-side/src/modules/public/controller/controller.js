import { outerModel } from "../../../../DB/model/forienouter.model.js";
import { interModel } from "../../../../DB/model/intererior.model.js";
import { landmuniModel } from "../../../../DB/model/landmuni.mode.js";
import { muniModel } from "../../../../DB/model/municipality.model.js";
import { survyModel } from "../../../../DB/model/survey.model.js";
import { taxModel } from "../../../../DB/model/tax.model.js";

export const AddCitizen = (req, res, next) => {
  try {
    const { id, name, Date_of_Birth, Mather_name, place_of_birth } = req.body;

    const photo = req.file.filename;

    interModel.create({
      id,
      name,
      Date_of_Birth,
      Mather_name,
      place_of_birth,
      photo,
    });
    res.status(200).json({ message: "success" });
  } catch (e) {
    next(new Error(e.message, { cause: 404 }));
  }
};

export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await interModel.findOne({ id: id });

    res.status(200).json(user);
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
export const AddOuter = (req, res, next) => {
  try {
    const { id } = req.body;
    const photo = req.file.filename;
    outerModel.create({
      id,
      photo,
    });
    res.status(200).json({ message: "success" });
  } catch (e) {
    next(new Error(e.message, { cause: 404 }));
  }
};

export const getOuter = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await outerModel.findOne({ id: id });

    res.status(200).json(user);
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const AddTax = (req, res, next) => {
  try {
    const { id } = req.body;
    const photo = req.file.filename;
    taxModel.create({
      id,
      photo,
    });
    res.status(200).json({ message: "success" });
  } catch (e) {
    next(new Error(e.message, { cause: 404 }));
  }
};

export const getTax = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await taxModel.findOne({ id: id });

    res.status(200).json(user);
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const AddSurvy = (req, res, next) => {
  try {
    const { Governorate, pelvis_number, land_number, village } = req.body;
    const photo = req.file.filename;
    survyModel.create({
      Governorate,
      pelvis_number,
      land_number,
      village,
      area_chart: photo,
    });
    res.status(200).json({ message: "success" });
  } catch (e) {
    next(new Error(e.message, { cause: 404 }));
  }
};

export const getSurvy = async (req, res, next) => {
  try {
    const { Governorate, pelvis_number, land_number, village } = req.body;
    // console.log(Governorate, pelvis_number, land_number)
    const land = await survyModel.findOne({
      Governorate: Governorate,
      pelvis_number: pelvis_number,
      land_number: land_number,
      village,
    });

    res.status(200).json(land);
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const AddMuni = (req, res, next) => {
  try {
    const { id } = req.body;
    const photo = req.file.filename;
    muniModel.create({
      id,
      municipal_clearance: photo,
    });
    res.status(200).json({ message: "success" });
  } catch (e) {
    next(new Error(e.message, { cause: 404 }));
  }
};

export const getMuni = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await muniModel.findOne({ id: id });
    res.status(200).json(user);
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const AddlandMuni = (req, res, next) => {
  try {
    const { id } = req.params;
    const { land_number, district_number, pelvise_number } = req.body;
    const land_desc = req.files["img1"][0].filename;
    const site_plan = req.files["img2"][0].filename;

    landmuniModel.create({
      userId: id,
      land_number,
      district_number,
      pelvise_number,
      land_desc,
      site_plan,
    });
    res.status(200).json({ message: "success" });
  } catch (e) {
    next(new Error(e.message, { cause: 404 }));
  }
};

export const getlandMuni = async (req, res, next) => {
  try {
    const { land_number, district_number, pelvise_number } = req.body;
    const user = await landmuniModel
      .findOne({ land_number, district_number, pelvise_number })
      .populate({
        path: "userId",
        select: "id",
      });
    res.status(200).json(user);
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
