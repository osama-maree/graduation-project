import { model, Schema } from "mongoose";

const employeeSchema = new Schema(
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
    confirmEmail: {
      type: Boolean,
      default:false
    },
    sendCode: {
      type: String,
      default:null
    },
    role: {
      type: String,
      enum: ["employee", "manager"],
      default: "employee",
    },
    counter: {
      type: Number,
      default: 0,
    },
    freez: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const employeeModel = model("employee", employeeSchema);
