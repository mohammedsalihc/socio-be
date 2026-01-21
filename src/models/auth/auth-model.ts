import mongoose, { Schema } from "mongoose"
import { IAuth } from "../../constants/interface/auth-interface"

const auth_schema = new mongoose.Schema({
    user:{type:Schema.Types.ObjectId,ref:"user"},
    password : { type: String},
    role: { type: String, required: true },  
})
export const AuthModel = mongoose.model<IAuth & mongoose.Document>('auth', auth_schema)
