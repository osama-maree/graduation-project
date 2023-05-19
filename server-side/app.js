import express from "express";
import dotenv from "dotenv";
import connectDB from "./DB/connection.js";
import cors from "cors";
import {
  authRouter,
  employeeRouter,
  managerRouter,
  userRouter,
} from "./src/modules/index.router.js";
import morgan from "morgan";
import { auth } from "./src/middleware/auth.js";
import { role } from "./src/services/role.js";

dotenv.config({ path: "./config/.env" });
const app = express();
const port = 3000;
if (process.env.NODE_ENV === "development2") {
  app.use(morgan());
}
app.use(express.static("public"));
app.use(cors());
app.use(express.json());
connectDB();
const BASEURL = process.env.BASEURL;
app.get(
  `${BASEURL}/getdata`,
  auth([role.admin, role.user, role.employee]),
  (req, res, next) => {
    try {
      let { token } = req.headers;
      token = token.split("__")[1];
      res.status(200).json({ role: req.user.role, token });
    } catch (err) {
      next(new Error(err.message, { cause: 404 }));
    }
  }
);
app.use(`${BASEURL}/auth`, authRouter);
app.use(`${BASEURL}/admin`, managerRouter);
app.use(`${BASEURL}/employee`, employeeRouter);
app.use(`${BASEURL}/user`, userRouter);
app.use("*", (req, res) => {
  res.status(404).json({ message: "page is not found" });
});

app.use((err, req, res, next) => {
  if (err) {
    res
      .status(err["cause"])
      .json({ message: "catch error", error: err.message });
  }
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
