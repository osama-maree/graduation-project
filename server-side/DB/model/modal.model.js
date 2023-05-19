import { model, Schema, Types } from "mongoose";
const modalSchema = new Schema(
  {
    ImgUrl: {
      type: String,
      required: true,
    },
    title: String,
    text: String,
    employeeId:{
        type: Schema.Types.ObjectId,
        ref: "Employee"
    }
  },
  { timestamps: true }
);
export const modalModel = model("modal", modalSchema);
