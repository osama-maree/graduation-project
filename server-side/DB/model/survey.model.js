import { model, Schema } from "mongoose";
const survySchema = new Schema({
  Governorate: {
    type: String,
    required: true,
  },
  pelvis_number: {
    type: String,
    required: true,
  },
  land_number: {
    type: String,
    required: true,
  },
  village: {
    type: String,
    required: true,
  },
  area_chart: {
    type: String,
    required: true,
  },
});
export const survyModel = model("survy", survySchema);
