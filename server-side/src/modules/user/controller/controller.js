import { employeeModel } from "../../../../DB/model/Employee.model.js";
import { fragmentModel } from "../../../../DB/model/land.fragment.js";
import { inhertModel } from "../../../../DB/model/land.inhertance.model.js";
import { landModel } from "../../../../DB/model/land.model.js";
import { mortgagaModel } from "../../../../DB/model/land.mortgaga.model.js";
import { saleModel } from "../../../../DB/model/land.sale.model.js";
import { sortModel } from "../../../../DB/model/land.sorting.model.js";
import { modalModel } from "../../../../DB/model/modal.model.js";
import { newModel } from "../../../../DB/model/news.model.js";
import { userModel } from "../../../../DB/model/user.model.js";
import fs from "fs";

export const land_Mortgaga = async (req, res, next) => {
  try {
    const employee = await employeeModel
      .find({ role: "employee" }, { _id: 1, counter: 1 })
      .sort({ counter: 1 })
      .limit(1);
    await employeeModel.findOneAndUpdate(
      { _id: employee[0]._id },
      { $inc: { counter: 1 } }
    );

    const keys = Object.keys(req.files);
    let paths = [];
    for (let i of keys) {
      const secure_url = req.files[i][0].filename;
      paths.push(secure_url);
    }
    const [
      Kushan,
      Photo_of_citizen_ID,
      Photo_of_Bank_ID,
      Legal_Declaration,
      Insurance_Bond,
      authorization_Letter,
      Insurance_Request,
    ] = paths;
    const mortgaga = new mortgagaModel({
      Kushan,
      Photo_of_citizen_ID,
      Photo_of_Bank_ID,
      Legal_Declaration,
      Insurance_Bond,
      authorization_Letter,
      Insurance_Request,
      userId: req.user._id,
      employeeId: employee[0]._id,
    });
    await mortgaga.save();
    res.status(201).json({ message: "success" });
  } catch (err) {
    next(new Error("internal error", { cause: 400 }));
  }
};

export const land_sale = async (req, res, next) => {
  try {
    const employee = await employeeModel
      .find({ role: "employee" }, { _id: 1, counter: 1 })
      .sort({ counter: 1 })
      .limit(1);
    await employeeModel.findOneAndUpdate(
      { _id: employee[0]._id },
      { $inc: { counter: 1 } }
    );

    const keys = Object.keys(req.files);

    let paths = [];
    for (let i of keys) {
      const secure_url = req.files[i][0].filename;
      paths.push(secure_url);
    }

    const [
      Kushan,
      Contract_of_Sale,
      Financial_Clearance,
      Municipal_Clearance,
      Land_Describtion,
      Photo_Buer_ID,
      Photo_Seller_ID,
    ] = paths;
    const sale = new saleModel({
      Kushan,
      Contract_of_Sale,
      Financial_Clearance,
      Municipal_Clearance,
      Land_Describtion,
      Photo_Buer_ID,
      Photo_Seller_ID,
      userId: req.user._id,
      employeeId: employee[0]._id,
    });

    await sale.save();
    res.status(201).json({ message: "success" });
  } catch (err) {
    next(new Error("internal error", { cause: 400 }));
  }
};

export const land_fragmentation = async (req, res, next) => {
  try {
    const employee = await employeeModel
      .find({ role: "employee" }, { _id: 1, counter: 1 })
      .sort({ counter: 1 })
      .limit(1);
    await employeeModel.findOneAndUpdate(
      { _id: employee[0]._id },
      { $inc: { counter: 1 } }
    );

    const keys = Object.keys(req.files);
    let paths = [];
    for (let i of keys) {
      const secure_url = req.files[i][0].filename;
      paths.push(secure_url);
    }
    const [
      Kushan,
      Photo_of_citizen_ID,
      Site_Plan,
      Area_Chart,
      Municipal_Clearance,
      Financial_Clearance,
      Transaction_Report,
      Detection_Report,
      Change_Statment,
    ] = paths;

    const fragment = new fragmentModel({
      Kushan,
      Photo_of_citizen_ID,
      Site_Plan,
      Area_Chart,
      Municipal_Clearance,
      Financial_Clearance,
      Transaction_Report,
      Detection_Report,
      Change_Statment,
      userId: req.user._id,
      employeeId: employee[0]._id,
    });

    await fragment.save();
    res.status(201).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 400 }));
  }
};
export const inheritance_transfer = async (req, res, next) => {
  try {
    const employee = await employeeModel
      .find({ role: "employee" }, { _id: 1, counter: 1 })
      .sort({ counter: 1 })
      .limit(1);
    await employeeModel.findOneAndUpdate(
      { _id: employee[0]._id },
      { $inc: { counter: employee[0].counter + 1 } }
    );

    const keys = Object.keys(req.files);
    let paths = [];
    for (let i of keys) {
      const secure_url = req.files[i][0].filename;
      paths.push(secure_url);
    }
    const [
      Limiting_Legacy,
      Kushan,
      Municipal_Clearance,
      Financial_Clearance,
      Photo_Inheritors_ID,
      Endorsements,
    ] = paths;

    const transfer = new inhertModel({
      Limiting_Legacy,
      Kushan,
      Municipal_Clearance,
      Financial_Clearance,
      Photo_Inheritors_ID,
      Endorsements,
      userId: req.user._id,
      employeeId: employee[0]._id,
    });
    await transfer.save();
    res.status(201).json({ message: "success" });
  } catch (err) {
    next(new Error("internal error", { cause: 400 }));
  }
};

export const land_sorting = async (req, res, next) => {
  try {
    const employee = await employeeModel
      .find({ role: "employee" }, { _id: 1, counter: 1 })
      .sort({ counter: 1 })
      .limit(1);

    await employeeModel.findOneAndUpdate(
      { _id: employee[0]._id },
      { $inc: { counter: 1 } }
    );

    const keys = Object.keys(req.files);
    let paths = [];
    for (let i of keys) {
      const secure_url = req.files[i][0].filename;
      paths.push(secure_url);
    }

    const [
      Kushan,
      Photo_of_citizen_ID,
      Site_Plan,
      Area_Chart,
      Municipal_Clearance,
      Financial_Clearance,
      Transaction_Report,
      Detection_Report,
      Change_Statment,
      court_decision,
      Execution_Warrant_Book,
    ] = paths;
    const sorting = new sortModel({
      Kushan,
      Photo_of_citizen_ID,
      Site_Plan,
      Area_Chart,
      Municipal_Clearance,
      Financial_Clearance,
      Transaction_Report,
      Detection_Report,
      Change_Statment,
      Execution_Warrant_Book,
      court_decision,
      userId: req.user._id,
      employeeId: employee[0]._id,
    });
    await sorting.save();
    res.status(201).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 400 }));
  }
};

export const getMortgaga = async (req, res, next) => {
  try {
    const mortgaga = await mortgagaModel
      .find({
        userId: req.user._id,
      })
      .select("Movement_type id  feesDone state MoveState message");
    res.status(200).json({ message: "success", transaction: mortgaga });
  } catch (err) {
    next(new Error("internal error", { cause: 400 }));
  }
};
export const Land_sale2 = async (req, res) => {
  try {
    const Land_Sals1 = await saleModel
      .find({
        userId: req.user._id,
      })
      .select("Movement_type id  feesDone state MoveState message");
    res.status(200).json({ message: "success", transaction: Land_Sals1 });
  } catch (err) {
    res.status(400).json({ error: "internal error" });
  }
};

export const inheritance_Transfer = async (req, res) => {
  try {
    const Inhert_Transefer = await inhertModel
      .find({
        userId: req.user._id,
      })
      .select("Movement_type id  feesDone state MoveState message");
    res.status(200).json({ message: "success", transaction: Inhert_Transefer });
  } catch (err) {
    res.status(400).json({ error: "internal error" });
  }
};

export const land_fragmentation_trans = async (req, res) => {
  try {
    const Land_frag = await fragmentModel
      .find({
        userId: req.user._id,
      })
      .select("Movement_type id  feesDone state MoveState message");
    res.status(200).json({ message: "success", transaction: Land_frag });
  } catch (err) {
    res.status(400).json({ error: "internal error" });
  }
};

export const getLand_sorting = async (req, res) => {
  try {
    const Land_sort = await sortModel
      .find({
        userId: req.user._id,
      })
      .select("Movement_type id  feesDone state MoveState message");
    res.status(200).json({ message: "success", transaction: Land_sort });
  } catch (err) {
    res.status(400).json({ error: "internal error" });
  }
};

export const getUserInfo = async (req, res, next) => {
  try {
    const { _id } = req.user;
    const UserData = await userModel.findById(_id).select("-_id -password");
    res.status(200).json(UserData);
  } catch (err) {
    next(new Error(err.message, { cause: 400 }));
  }
};

export const getLand = async (req, res, next) => {
  try {
    const land = await landModel.find({ userId: req.user._id, freez: false });
    res.status(200).json(land);
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
export const getSingleTrans = async (req, res, next) => {
  try {
    const { type, id } = req.params;
    let transaction;
    if (type === "sale") {
      transaction = await saleModel.findById({ _id: id });
    } else if (type === "mort") {
      transaction = await mortgagaModel.findById({ _id: id });
    } else if (type === "sort") {
      transaction = await sortModel.findById({ _id: id });
    } else if (type === "frag") {
      transaction = await fragmentModel.findById({ _id: id });
    } else if (type === "inhert") {
      transaction = await inhertModel.findById({ _id: id });
    }
    res.status(200).json(transaction);
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const updateTransaction = async (req, res, next) => {
  try {
    const { name, _id, value } = req.body;
    const { type } = req.params;
    const imagePath = "C:/Users/msi/Desktop/GP-FB/grad-project/upload/" + value;

    let updatedTrans;
    const url = req.file.filename;
    if (type === "sale") {
      updatedTrans = await saleModel.findByIdAndUpdate(
        { _id: _id },
        { [name]: url }
      );
    } else if (type === "mort") {
      updatedTrans = await mortgagaModel.findByIdAndUpdate(
        { _id: _id },
        { [name]: url }
      );
    } else if (type === "sort") {
      updatedTrans = await sortModel.findByIdAndUpdate(
        { _id: _id },
        { [name]: url }
      );
    } else if (type === "frag") {
      updatedTrans = await fragmentModel.findByIdAndUpdate(
        { _id: _id },
        { [name]: url }
      );
    } else if (type === "inhert") {
      updatedTrans = await inhertModel.findByIdAndUpdate(
        { _id: _id },
        { [name]: url }
      );
    }

    if (updatedTrans[name] !== value) {
      next(new Error("file not found", { cause: 404 }));
    } else {
      fs.unlink(imagePath, (err) => {
        if (err) {
          return next(new Error("error from unlike", { cause: 400 }));
        }
      });

      res.status(200).json({ message: "ok" });
    }
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const getNews = async (req, res, next) => {
  try {
    const news = await newModel
      .find({ forAccount: req.user.role })
      .sort({ _id: -1 })
      .limit(1);
    res.status(200).json(news[0]);
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
export const getModal = async (req, res, next) => {
  try {
    const modal = await modalModel.find({}).sort({ _id: -1 }).limit(3);
    res.status(200).json(modal);
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
