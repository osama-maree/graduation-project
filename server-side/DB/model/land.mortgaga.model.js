import { model, Schema, Types } from "mongoose";
const mortgagaSchema = new Schema(
  {
    id: {
      type: Number,
      default: 0,
    },
    Movement_type: {
      type: String,
      default: "معاملة رهن",
    },
    Kushan: {
      type: String,
      required: true,
    },
    Photo_of_citizen_ID: {
      type: String,
      required: true,
    },
    Photo_of_Bank_ID: {
      type: String,
      required: true,
    },
    Legal_Declaration: {
      type: String,
      required: true,
    },
    Insurance_Bond: {
      type: String,
      required: true,
    },
    authorization_Letter: {
      type: String,
      required: true,
    },
    Insurance_Request: {
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
);//0597257068

mortgagaSchema.pre("save", async function () {
  const timestamp = Date.now();
  let randomNumber = Math.floor(Math.random() * 1000);
  if (randomNumber === 0) {
    randomNumber = 191;
  }
  const id = parseInt(`${timestamp % 100000}${randomNumber}`);
  this.id = id;
});
export const mortgagaModel = model("mortgaga", mortgagaSchema);
