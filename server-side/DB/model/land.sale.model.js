import { model, Schema, Types } from "mongoose";
const saleSchema = new Schema(
  {
    id: {
      type: Number,
      default: 0,
    },
    Municipal_Clearance: {
      type: String,
    },
    Movement_type: {
      type: String,
      default: "معاملة بيع",
    },
    Photo_Seller_ID: {
      type: String,
      required: true,
    },
    Contract_of_Sale: {
      type: String,
      required: true,
    },
    Kushan: {
      type: String,
      required: true,
    },
    Photo_Buer_ID: {
      type: String,
      required: true,
    },
    Land_Describtion: {
      type: String,
      required: true,
    },
    Financial_Clearance: {
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
      default: 0, //0 first  1 accept 2 reject 3-end
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

saleSchema.pre("save", async function () {
  const timestamp = Date.now();
  let randomNumber = Math.floor(Math.random() * 1000);
  if (randomNumber === 0) {
    randomNumber = 191;
  }
  const id = parseInt(`${timestamp % 100000}${randomNumber}`);
  this.id = id;
});
export const saleModel = model("sale", saleSchema);
