import { model, Schema, Types } from "mongoose";
const sortSchema = new Schema(
  {
    id: {
      type: Number,
      default: 0,
    },
    Movement_type: {
      type: String,
      default: "معاملة فرز",
    },
    Kushan: {
      type: String,
      required: true,
    },
    Photo_of_citizen_ID: {
      type: String,
      required: true,
    },
    Transaction_Report: {
      type: String,
      required: true,
    },
    Financial_Clearance: {
      type: String,
      required: true,
    },
    Detection_Report: {
      type: String,
      required: true,
    },
    Change_Statment: {
      type: String,
      required: true,
    },
    Municipal_Clearance: {
      type: String,
      required: true,
    },
    Area_Chart: {
      type: String,
      required: true,
    },
    Site_Plan: {
      type: String,
      required: true,
    },
    Execution_Warrant_Book: {
      type: String,
      required: true,
    },
    court_decision: {
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

sortSchema.pre("save", async function () {
  const timestamp = Date.now();
  let randomNumber = Math.floor(Math.random() * 1000);
  if (randomNumber === 0) {
    randomNumber = 191;
  }
  const id = parseInt(`${timestamp % 100000}${randomNumber}`);
  this.id = id;
});
export const sortModel = model("sort", sortSchema);
