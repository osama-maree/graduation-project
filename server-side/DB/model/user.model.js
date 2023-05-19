import { model, Schema, Types } from "mongoose";
const userSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    confirmEmail: {
      type: Boolean,
      default: false,
    },
    sendCode: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  { timestamps: true }
);

export const userModel = model("user", userSchema);
