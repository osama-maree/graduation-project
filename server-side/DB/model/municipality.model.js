import { model, Schema, Types } from "mongoose";
const muniSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  municipal_clearance: {
    type: String,
    required: true,
  },
});
export const muniModel = model("muni", muniSchema);
