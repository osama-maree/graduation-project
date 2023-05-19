import { employeeModel } from "../../../../DB/model/Employee.model.js";
import { userModel } from "../../../../DB/model/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import sendEmail from "../../../services/email.js";
export const signIn = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    let user = await employeeModel.findOne({
      email: email,
    });
    if (!user) {
      user = await userModel.findOne({
        email: email,
      });
    }
    if (!user) {
      next(new Error("invalid account", { cause: 404 }));
    } else {
      if (!user.confirmEmail) {
        return next(new Error("please vefy U email", { cause: 400 }));
      } else {
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
          next(new Error("invalid account", { cause: 400 }));
        } else {
          const token = jwt.sign(
            {
              id: user.id,
              _id: user._id,
              email: user.email,
              name: user.fullName,
            },
            process.env.LOGINTOKEN,
            {
              expiresIn: 60 * 60 * 24,
            }
          );
          res
            .status(200)
            .json({ message: "valid account", token, role: user.role });
        }
      }
    }
  } catch (err) {
    next(new Error("internal error", { cause: 400 }));
  }
};

export const sendCode = async (req, res, next) => {
  try {
    const { email } = req.body;

    let user = await userModel.findOne({ email }).select("email role");
    let emp = false;
    if (!user) {
      user = await employeeModel.findOne({ email }).select("email role");
      emp = true;
    }
    if (!user) {
      next(new Error("cant find user", { cause: 404 }));
    } else {
      const code = nanoid();
      await sendEmail(email, "Forget password", `verify code : ${code}`);
      if (emp) {
        await employeeModel.findOneAndUpdate({ email }, { sendCode: code });
      } else {
        await userModel.findOneAndUpdate({ email }, { sendCode: code });
      }

      res.status(200).json({ message: "ok", role: user.role });
    }
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const veriFyCode = async (req, res, next) => {
  try {
    const { code, email, role } = req.body;
    if (!code) {
      next(new Error("enter coce password", { cause: 404 }));
    }
    let updated;
    if (role === "user") {
      updated = await userModel.findOneAndUpdate(
        { email: email, sendCode: code },
        { sendCode: "yes" }
      );
    } else {
      updated = await employeeModel.findOneAndUpdate(
        { email: email, sendCode: code },
        { sendCode: "yes" }
      );
    }
    if (updated) {
      res.status(200).json({ message: "ok" });
    } else {
      return next(new Error("enter valid code", { cause: 500 }));
    }
  } catch (err) {
    return next(new Error("internal error", { cause: 500 }));
  }
};

export const changePassword = async (req, res, next) => {
  try {
    const { password, email, role } = req.body;
    const hash = await bcrypt.hash(password, parseInt(process.env.SALTROUND));
    let updated;
    if (role === "user") {
      updated = await userModel.findOneAndUpdate(
        { email: email, sendCode: "yes" },
        { sendCode: null, password: hash }
      );
    } else {
      updated = await employeeModel.findOneAndUpdate(
        { email: email, sendCode: "yes" },
        { sendCode: null, password: hash }
      );
    }
    if (updated) {
      res.status(200).json({ message: "ok" });
    } else {
      return next(new Error("enter valid code", { cause: 500 }));
    }
  } catch (err) {
    return next(new Error("internal error", { cause: 500 }));
  }
};

export const confirmEmail = async (req, res) => {
  try {
    const { token } = req.params;
    const decode = jwt.verify(token, process.env.EMAILTOKEN);

    if (!decode) {
      res.status(400).json({ message: "invalid token" });
    } else {
      const user = await userModel.findOneAndUpdate(
        { _id: decode.id, confirmEmail: false },
        { confirmEmail: true }
      );

      if (!user) {
        //res.status(400).json({ message: "user already confirmed" });
        const emp = await employeeModel.findOneAndUpdate(
          { _id: decode.id, confirmEmail: false },
          { confirmEmail: true }
        );

        if (!emp) {
          res.status(400).json({ message: "email is already verfying" });
        } else {
          res.status(200).json({ message: "email confirmed pleaze login" });
        }
      } else {
        res.status(200).json({ message: "email confirmed pleaze login" });
      }
    }
  } catch (err) {
    res.status(404).json({ message: "internal error", error: err.message });
  }
};
