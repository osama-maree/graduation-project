import { model, Schema, Types } from "mongoose";
//inhert transfer
const inherSchema = new Schema(
  {
    id: {
      type: Number,
      default: 0,
    },
    Movement_type: {
      type: String,
      default: "معاملة نقل ارث",
    },
    Financial_Clearance: {
      type: String,
      required: true,
    },
    Municipal_Clearance: {
      type: String,
      required: true,
    },
    Photo_Inheritors_ID: {
      type: String,
      required: true,
    },
    Limiting_Legacy: {
      type: String,
      required: true,
    },
    Endorsements: {
      type: String,
      required: true,
    },
    Kushan: {
      type: String,
      required: true,
    },
    feesDone: {
      type: Boolean,
      default: false,
    },
    MoveState: {
      type: String,
      default: "جاري المعالجة",
    },
    state: {
      type: Number,
      default: 0,
    },
    message: {
      type: String,
      default: "لا يوجد رسائل لعرضها",
    },
    cost: {
      type: Number,
      default: 0,
    },
    userId: {
      type: Types.ObjectId,
      required: true,
      ref: "user",
    },
    employeeId: {
      type: Types.ObjectId,
      required: true,
      ref: "employee",
    },
  },
  { timestamps: true }
);
inherSchema.pre("save", async function () {
  const timestamp = Date.now();
  let randomNumber = Math.floor(Math.random() * 1000);
  if (randomNumber === 0) {
    randomNumber = 191;
  }
  const id = parseInt(`${timestamp % 100000}${randomNumber}`);
  this.id = id;
});
export const inhertModel = model("transfer", inherSchema);
