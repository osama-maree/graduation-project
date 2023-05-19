import { model, Schema } from "mongoose";
const outerSchema = new Schema({
    id:{
        type:String,
        required:true
    },
    photo:{
        type:String,
        required:true
    }
})
export const outerModel= model("outer", outerSchema);