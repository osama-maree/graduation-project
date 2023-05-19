import { model, Schema } from "mongoose";
const interiorSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  Date_of_Birth: {
    type: Date,
    required: true,
  },
  Mather_name: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  place_of_birth: {
    type: String,
    required: true,
  }
});
export const interModel = model("inter", interiorSchema);
