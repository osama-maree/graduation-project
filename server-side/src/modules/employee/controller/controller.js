import bcrypt from "bcryptjs";
import { userModel } from "../../../../DB/model/user.model.js";
import { inhertModel } from "../../../../DB/model/land.inhertance.model.js";
import { fragmentModel } from "../../../../DB/model/land.fragment.js";
import { mortgagaModel } from "../../../../DB/model/land.mortgaga.model.js";
import { saleModel } from "../../../../DB/model/land.sale.model.js";
import { sortModel } from "../../../../DB/model/land.sorting.model.js";
import { landModel } from "../../../../DB/model/land.model.js";
import { newModel } from "../../../../DB/model/news.model.js";
import { modalModel } from "../../../../DB/model/modal.model.js";
import cloudinary from "../../../services/cloudinary.js";
import sendEmail from "../../../services/email.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  try {
    const { id, fullName, password, email, address, birthDate, phoneNumber } =
      req.body;
    const user = await userModel
      .findOne({
        email: email,
      })
      .select("email");
    if (user) {
      next(new Error("exits user", { cause: 400 }));
    } else {
      let hashPassword = await bcrypt.hash(
        password,
        parseInt(process.env.SALTROUND)
      );
      const userSch = new userModel({
        id,
        fullName,
        password: hashPassword,
        email,
        address,
        birthDate,
        phoneNumber,
      });
      const savedUser = await userSch.save();
      const token = await jwt.sign(
        { id: savedUser._id },
        process.env.EMAILTOKEN
      );
      const Message = `<!DOCTYPE html>
<html>
<head>

  <meta charset="utf-8">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <title>Email Confirmation</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <style type="text/css">
  /**
   * Google webfonts. Recommended to include the .woff version for cross-client compatibility.
   */
  @media screen {
    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 400;
      src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/ODelI1aHBYDBqgeIAH2zlBM0YzuT7MdOe03otPbuUS0.woff) format('woff');
    }
    @font-face {
      font-family: 'Source Sans Pro';
      font-style: normal;
      font-weight: 700;
      src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'), url(https://fonts.gstatic.com/s/sourcesanspro/v10/toadOcfmlt9b38dHJxOBGFkQc6VGVFSmCnC_l7QZG60.woff) format('woff');
    }
  }
  /**
   * Avoid browser level font resizing.
   * 1. Windows Mobile
   * 2. iOS / OSX
   */
  body,
  table,
  td,
  a {
    -ms-text-size-adjust: 100%; /* 1 */
    -webkit-text-size-adjust: 100%; /* 2 */
  }
  /**
   * Remove extra space added to tables and cells in Outlook.
   */
  table,
  td {
    mso-table-rspace: 0pt;
    mso-table-lspace: 0pt;
  }
  /**
   * Better fluid images in Internet Explorer.
   */
  img {
    -ms-interpolation-mode: bicubic;
  }
  /**
   * Remove blue links for iOS devices.
   */
  a[x-apple-data-detectors] {
    font-family: inherit !important;
    font-size: inherit !important;
    font-weight: inherit !important;
    line-height: inherit !important;
    color: inherit !important;
    text-decoration: none !important;
  }
  /**
   * Fix centering issues in Android 4.4.
   */
  div[style*="margin: 16px 0;"] {
    margin: 0 !important;
  }
  body {
    width: 100% !important;
    height: 100% !important;
    padding: 0 !important;
    margin: 0 !important;
  }
  /**
   * Collapse table borders to avoid space between cells.
   */
  table {
    border-collapse: collapse !important;
  }
  a {
    color: #1a82e2;
  }
  img {
    height: auto;
    line-height: 100%;
    text-decoration: none;
    border: 0;
    outline: none;
  }
  </style>

</head>
<body style="background-color: #e9ecef;">

  <!-- start preheader -->
  <div class="preheader" style="display: none; max-width: 0; max-height: 0; overflow: hidden; font-size: 1px; line-height: 1px; color: #fff; opacity: 0;">
    A preheader is the short summary text that follows the subject line when an email is viewed in the inbox.
  </div>
  <!-- end preheader -->

  <!-- start body -->
  <table border="0" cellpadding="0" cellspacing="0" width="100%">

    <!-- start logo -->
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td align="center" valign="top" style="padding: 36px 24px;">
              <a href="https://www.blogdesire.com" target="_blank" style="display: inline-block;">
                <img src="https://www.blogdesire.com/wp-content/uploads/2019/07/blogdesire-1.png" alt="Logo" border="0" width="48" style="display: block; width: 48px; max-width: 48px; min-width: 48px;">
              </a>
            </td>
          </tr>
        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- end logo -->

    <!-- start hero -->
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 36px 24px 0; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; border-top: 3px solid #d4dadf;">
              <h1 style="margin: 0; font-size: 32px; font-weight: 700; letter-spacing: -1px; line-height: 48px;">Confirm Your Email Address</h1>
            </td>
          </tr>
        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- end hero -->

    <!-- start copy block -->
    <tr>
      <td align="center" bgcolor="#e9ecef">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

          <!-- start copy -->
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
              <p style="margin: 0;">Tap the button below to confirm your email address. If you didn't create an account with <a href="https://blogdesire.com">Paste</a>, you can safely delete this email.</p>
            </td>
          </tr>
          <!-- end copy -->

          <!-- start button -->
          <tr>
            <td align="left" bgcolor="#ffffff">
              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center" bgcolor="#ffffff" style="padding: 12px;">
                    <table border="0" cellpadding="0" cellspacing="0">
                      <tr>
                        <td align="center" bgcolor="#1a82e2" style="border-radius: 6px;">
                          <a href="${req.protocol}://${req.headers.host}${process.env.BASEURL}/auth/confirmEmail/${token}" target="_blank" style="display: inline-block; padding: 16px 36px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; color: #ffffff; text-decoration: none; border-radius: 6px;">verify email</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- end button -->

          <!-- start copy -->
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px;">
              <p style="margin: 0;">If that doesn't work, copy and paste the following link in your browser:</p>
              <p style="margin: 0;"><a href="https://blogdesire.com" target="_blank">https://blogdesire.com/xxx-xxx-xxxx</a></p>
            </td>
          </tr>
          <!-- end copy -->

          <!-- start copy -->
          <tr>
            <td align="left" bgcolor="#ffffff" style="padding: 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 16px; line-height: 24px; border-bottom: 3px solid #d4dadf">
              <p style="margin: 0;">Cheers,<br> Paste</p>
            </td>
          </tr>
          <!-- end copy -->

        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- end copy block -->

    <!-- start footer -->
    <tr>
      <td align="center" bgcolor="#e9ecef" style="padding: 24px;">
        <!--[if (gte mso 9)|(IE)]>
        <table align="center" border="0" cellpadding="0" cellspacing="0" width="600">
        <tr>
        <td align="center" valign="top" width="600">
        <![endif]-->
        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">

          <!-- start permission -->
          <tr>
            <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
              <p style="margin: 0;">You received this email because we received a request for [type_of_action] for your account. If you didn't request [type_of_action] you can safely delete this email.</p>
            </td>
          </tr>
          <!-- end permission -->

          <!-- start unsubscribe -->
          <tr>
            <td align="center" bgcolor="#e9ecef" style="padding: 12px 24px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif; font-size: 14px; line-height: 20px; color: #666;">
              <p style="margin: 0;">To stop receiving these emails, you can <a href="https://www.blogdesire.com" target="_blank">unsubscribe</a> at any time.</p>
              <p style="margin: 0;">Paste 1234 S. Broadway St. City, State 12345</p>
            </td>
          </tr>
          <!-- end unsubscribe -->

        </table>
        <!--[if (gte mso 9)|(IE)]>
        </td>
        </tr>
        </table>
        <![endif]-->
      </td>
    </tr>
    <!-- end footer -->

  </table>
  <!-- end body -->

</body>
        </html>`;
      // console.log("ossss");
      await sendEmail(email, "confirmEmail", Message);
      res.status(201).json({ message: "success,verify gmail", savedUser });
    }
  } catch (err) {
    next(new Error(err.message, { cause: 400 }));
  }
};

export const getInhertTransfer = async (req, res, next) => {
  try {
    //console.log(req.user)
    const inhertTransfer = await inhertModel.find({
      employeeId: req.user._id,
    });
    res.status(200).json({ message: "success", inhertTransfer });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const LandFragment = async (req, res, next) => {
  try {
    //console.log(req.user)
    const landfragment = await fragmentModel.find({
      employeeId: req.user._id,
    });
    res.status(200).json({ message: "success", landfragment });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
export const LandMortgaga = async (req, res, next) => {
  try {
    //console.log(req.user)
    const landmortgaga = await mortgagaModel.find({
      employeeId: req.user._id,
    });
    res.status(200).json({ message: "success", landmortgaga });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
export const LandSale = async (req, res, next) => {
  try {
    //console.log(req.user)
    const landsale = await saleModel.find({
      employeeId: req.user._id,
    });
    res.status(200).json({ message: "success", landsale });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const LandSorting = async (req, res, next) => {
  try {
    //console.log(req.user)
    const landsorting = await sortModel.find({
      employeeId: req.user._id,
    });
    res.status(200).json({ message: "success", landsorting });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const updateInheritTransfer = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { MoveState, message, cost } = req.body;
    let state;
    if (MoveState === "مقبولة") state = 1;
    else state = 2;
    await inhertModel.findOneAndUpdate(
      {
        id: id,
      },
      {
        message,
        state,
        MoveState,
        cost,
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
export const updateInheritTransferFeesDone = async (req, res, next) => {
  try {
    const { feesDone } = req.body;
    const { id } = req.params;
    await inhertModel.findOneAndUpdate(
      {
        id: id,
      },
      { feesDone: true }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
export const updatelandFragmentation = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { MoveState, message, cost } = req.body;
    let state;
    if (MoveState === "مقبولة") state = 1;
    else state = 2;
    await fragmentModel.findOneAndUpdate(
      { id: id },
      {
        message,
        state,
        MoveState,
        cost,
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const updateLandFragmentferFeesDone = async (req, res, next) => {
  try {
    const { feesDone } = req.body;
    const { id } = req.params;
    await fragmentModel.findOneAndUpdate({ id: id }, { feesDone: true });
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const updatelLandMortgaga = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { MoveState, message, cost } = req.body;
    let state;
    if (MoveState === "مقبولة") state = 1;
    else state = 2;
    await mortgagaModel.findOneAndUpdate(
      { id: id },
      {
        message,
        state,
        MoveState,
        cost,
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
export const updateLandMortgagaFeesDone = async (req, res, next) => {
  try {
    const { feesDone } = req.body;
    const { id } = req.params;
    await mortgagaModel.findOneAndUpdate(
      { id: id },

      { feesDone: true }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const updatelLandSale = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { MoveState, message, cost } = req.body;
    let state;
    if (MoveState === "مقبولة") state = 1;
    else state = 2;
    await saleModel.findOneAndUpdate(
      { id: id },
      {
        message,
        state,
        MoveState,
        cost,
      }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
export const updateLandSaleMFeesDone = async (req, res, next) => {
  try {
    const { feesDone } = req.body;
    const { id } = req.params;
    await saleModel.findOneAndUpdate({ id: id }, { feesDone: true });
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const updateLandsorting = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { MoveState, message, cost } = req.body;
    let state;
    if (MoveState === "مقبولة") state = 1;
    else state = 2;
    await sortModel.findOneAndUpdate(
      { id: id },
      { cost, message, state, MoveState }
    );
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
export const updateLandsortingFeesDone = async (req, res, next) => {
  try {
    const { id } = req.params;
    await sortModel.findOneAndUpdate({ id: id }, { feesDone: true });
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const CreateLand = async (req, res, next) => {
  try {
    const {
      id,
      Pelvis_id,
      Land_id,
      District_name,
      village_name,
      Governorate_name,
    } = req.body;
    const { _id } = await userModel.findOne({ id }).select("_id");
    const lands = req.file.filename;
    const land = new landModel({
      Pelvis_id,
      Land_id,
      District_name,
      village_name,
      lands,
      Governorate_name,
      userId: _id,
      employeeId: req.user._id,
    });

    await land.save();
    res.status(201).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const createNews = async (req, res, next) => {
  try {
    const { text, forAccount } = req.body;
    await newModel.create({ text, employeeId: req.user._id, forAccount });
    res.status(201).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
export const addModal = async (req, res, next) => {
  try {
    const { title, text } = req.body;
    const { secure_url } = await cloudinary.uploader.upload(req.file.path, {
      folder: "grad-proj",
    });
    await modalModel.create({
      ImgUrl: secure_url,
      title,
      text,
      employeeId: req.user._id,
    });
    res.status(201).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
export const getCustomTrans = async (req, res, next) => {
  try {
    const { type, id } = req.params;
    let retData;
    if (type === "sale") {
      retData = await saleModel
        .find({
          employeeId: req.user._id,
          state: id,
        })
        .populate({
          path: "userId",
          select: "fullName -_id",
        })
        .select(
          " -Municipal_Clearance -Photo_Seller_ID -MoveState -Contract_of_Sale -Kushan -Photo_Buer_ID -Land_Describtion -Financial_Clearance -feesDone -message"
        );
    } else if (type === "mort") {
      retData = await mortgagaModel
        .find({
          employeeId: req.user._id,
          state: id,
        })
        .populate({
          path: "userId",
          select: "fullName -_id",
        });
    } else if (type === "sort") {
      retData = await sortModel
        .find({
          employeeId: req.user._id,
          state: id,
        })
        .populate({
          path: "userId",
          select: "fullName -_id",
        });
    } else if (type === "frag") {
      retData = await fragmentModel
        .find({
          employeeId: req.user._id,
          state: id,
        })
        .populate({
          path: "userId",
          select: "fullName -_id",
        });
    } else if (type === "inhert") {
      retData = await inhertModel
        .find({
          employeeId: req.user._id,
          state: id,
        })
        .populate({
          path: "userId",
          select: "fullName -_id",
        });
    }
    res.status(200).json(retData);
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const CustomFuctionMessage = async (req, res, next) => {
  try {
    const { type, id } = req.params;
    const { message, cost, state } = req.body;
    let MoveState = state === 1 ? "مقبولة" : "مرفوضة";
    if (type === "sale") {
      await saleModel.findOneAndUpdate(
        { _id: id },
        { message, cost, MoveState, state }
      );
    } else if (type === "sort") {
      await sortModel.findOneAndUpdate(
        { _id: id },
        { message, cost, MoveState, state }
      );
    } else if (type === "mort") {
      await mortgagaModel.findOneAndUpdate(
        { _id: id },
        { message, cost, state }
      );
    } else if (type === "inhert") {
      await inhertModel.findOneAndUpdate(
        { _id: id },
        { message, MoveState, cost, state }
      );
    } else if (type === "frag") {
      await fragmentModel.findOneAndUpdate(
        { _id: id },
        { message, cost, state, MoveState }
      );
    }
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
export const CustomFuctionPaidFees = async (req, res, next) => {
  try {
    const { type, id } = req.params;
    const { message } = req.body;
    const MoveState = "منجزة";
    if (type === "sale") {
      await saleModel.findOneAndUpdate(
        { _id: id },
        { state: 3, MoveState, message }
      );
    } else if (type === "sort") {
      await sortModel.findOneAndUpdate(
        { _id: id },
        { state: 3, MoveState, message }
      );
    } else if (type === "mort") {
      await mortgagaModel.findOneAndUpdate({ _id: id }, { state: 3, message });
    } else if (type === "inhert") {
      await inhertModel.findOneAndUpdate(
        { _id: id },
        { state: 3, MoveState, message }
      );
    } else if (type === "frag") {
      await fragmentModel.findOneAndUpdate(
        { _id: id },
        { state: 3, message, MoveState }
      );
    }
    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const updateData = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { phoneNumber, address } = req.body;

    await userModel.findOneAndUpdate({ id: id }, { phoneNumber, address });

    res.status(200).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
export const getUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await userModel.findOne({ id: id });

    res.status(200).json(user);
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

//
export const addModal2 = async (req, res, next) => {
  try {
    const { title, text, url } = req.body;

    await modalModel.create({
      ImgUrl: url,
      title,
      text,
      employeeId: "64654a15ed47320527eb74ca",
    });
    res.status(201).json({ message: "success" });
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const FreezLand = async (req, res, next) => {
  try {
    const { Pelvis_id, Land_id, village_name, Governorate_name } = req.body;
    const freez = await landModel.findOneAndUpdate(
      {
        Pelvis_id,
        Land_id,
        village_name,
        Governorate_name,
      },
      { freez: true, employeeId: req.user.id },
      { new: true }
    );
    if (freez) {
      res.status(200).json({ message: "success" });
    } else {
      next(new Error("error", { cause: 500 }));
    }
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};

export const getLandForCitizin = async (req, res, next) => {
  try {
    const { id, Pelvis_id, Land_id, village_name, Governorate_name } = req.body;
    const { _id } = await userModel.findOne({ id }).select("_id");

    const land = await landModel.findOne({
      userId: _id,
      Pelvis_id,
      Land_id,
      village_name,
      Governorate_name,
    });
    res.status(200).json(land);
  } catch (err) {
    next(new Error(err.message, { cause: 500 }));
  }
};
