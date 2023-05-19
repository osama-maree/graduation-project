import jwt from "jsonwebtoken"; //using jwt to know user logged in
import { userModel } from "../../DB/model/user.model.js";
import { employeeModel } from "../../DB/model/Employee.model.js";

export const auth = (accessRoles = []) => {
  return async (req, res, next) => {
    try {
      let { token } = req.headers;

      if (!token.startsWith(process.env.authBearerToken)) {
        //A bearer token is a type of token that is used in Auth

        next(new Error("error token", { cause: 400 })); //if there is token and not match with bearer token reject request,bad
      } else {
        token = token.split("__")[1]; //remove bearer token from original token
        const decoded = await jwt.verify(token, process.env.LOGINTOKEN); //verify Token

        let user = await userModel
          .findOne({
            email: decoded.email,
          })
          .select("role id");

        if (!user) {
          user = await employeeModel
            .findOne({
              email: decoded.email,
            })
            .select("id  role");
        }
        if (!user) {
          next(new Error("user not found", { cause: 400 }));
        } else {
          if (!accessRoles.includes(user.role)) {
            next(new Error("U Are not authorized", { cause: 401}));
          } else {
            req.user = user; //set data for logged in user in req
            next(); //to next operation
          }
        }
      }
    } catch (err) {
      next(new Error("sendToken", { cause: 400 })); //reject if there an technical error as fail access to database or erorr in name of model and an other error for To prevent the server from crashing
    }
  };
};
