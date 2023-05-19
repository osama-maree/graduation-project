import { model, Schema, Types } from "mongoose";
const landSchema = new Schema(
  {
    Pelvis_id: {
      type: Number,
      required: true,
    },
    Land_id: {
      type: Number,
      required: true,
    },
    District_name: {
      type: String,
      required: true,
    },
    village_name: {
      type: String,
    },
    lands: {
      type: String,
      required: true,
    },
    Governorate_name: {
      type: String,
    },
    userId: {
      type: Types.ObjectId,
      required: true,
      ref: "user",
    },
    employeeId: {
      type: String,
      required: true,
    },
    freez:{
      type:Boolean,
      default:false
    }
  },
  { timestamps: true }
);
export const landModel = model("land", landSchema);
