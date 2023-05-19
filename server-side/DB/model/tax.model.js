import { model, Schema } from "mongoose";
const taxSchema = new Schema(
  {
    id: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
export const taxModel = model("tax", taxSchema);
