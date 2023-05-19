import { model, Schema, Types } from "mongoose";
const landmuniShema = new Schema({
  userId: {
    type: Types.ObjectId,
    ref: "muni",
    required: true,
  },
  land_number: {
    type: String,
    required: true,
  },
  district_number: {
    type: String,
    required: true,
  },
  pelvise_number: {
    type: String,
    required: true,
  },
  site_plan: {
    type: String,
    required: true,
  },
  land_desc: {
    type: String,
    required: true,
  },
});
export const landmuniModel = model("landmuni", landmuniShema);
