import mongoose, { Schema } from "mongoose"
import { IAuth } from "../../types/constants/interface/auth-interface"
import moment from "moment-timezone"

const auth_schema = new mongoose.Schema({
    user:{type:Schema.Types.ObjectId,ref:"user"},
    password : { type: String},
    phone:{type:String,required:true,unique:true},
    role: { type: String, required: true },
    created_at:{type:Date,default:moment().utc()}  
})
export const AuthModel = mongoose.model<IAuth & mongoose.Document>('auth', auth_schema)
