import { model, Schema, Types } from "mongoose";
const newsSchema = new Schema(
  {
    text: {
      type: String,
      required: true,
    },
    employeeId: {
      type: Types.ObjectId,
      required: true,
      ref: "employee",
    },
    forAccount:{
        type:String,
        required:true
    }
  },
  { timestamps: true }
);
export const newModel = model("new", newsSchema);
