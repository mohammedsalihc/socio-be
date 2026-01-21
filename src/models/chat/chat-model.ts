import mongoose, { Schema } from "mongoose";
import { EMembersStatus } from "../../constants/enum/auth-enum";
import { IchatRoom } from "../../constants/interface/chat-room-interface";

const chatRoomMemberSchema = new mongoose.Schema({
    user:{type:Schema.Types.ObjectId,ref:"user",required:true},
    user_name:{type:String},
    status:{type:String,default:EMembersStatus.ACTIVE},
    created_at:{type:Date}
})

const chat_schema = new mongoose.Schema({
    name:{type:String},
    members:{type:[chatRoomMemberSchema],default:[]},
    last_message:{type:Schema.Types.ObjectId,ref:"message"},
    location:{type:String},
    description:{type:String},
    created_by:{type:Schema.Types.ObjectId,required:true,ref:"user"},
    created_at:{type:Date},
    updated_at:{type:Date},
})

export const ChatRoomModel = mongoose.model<IchatRoom & mongoose.Document>('chat-room',chat_schema)