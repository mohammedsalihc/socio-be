import mongoose from "mongoose"
import { IUser } from "../../constants/interface/user-interface"
const attachment_schema = new mongoose.Schema({
  url: { type: String },
  key: { type: String }
})
const user_schema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String,required:true },
  email: { type: String, unique: true },
  role: { type: String, required: true },
  profile_pic: { type: attachment_schema, default: {} },
  registered_on: { type: Date }
})
export const UserModel = mongoose.model<IUser & mongoose.Document>('user', user_schema)