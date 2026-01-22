import mongoose, { Schema } from "mongoose";
import { IChatMessage } from "../../types/constants/interface/chat-room-interface";
export const attachment_schema = new mongoose.Schema({
    url:{type:String},
    key:{type:String},
    name:{type:String},
    attatchment_type:{type:String}
})
const schema = new mongoose.Schema({
    chat_room:{type:Schema.Types.ObjectId,required:true,ref:"chat-room"},
    user:{type:Schema.Types.ObjectId,required:true,ref:"user"},
    message:{type:String},
    attatchment:{type:[attachment_schema],default:[]},
    seen_by:{type:[Schema.Types.ObjectId],defalt:[]},
    delete_for_everyone:{type:Boolean},
    delete_for_myself:{type:[Schema.Types.ObjectId],default:[]},
    created_at:{type:Date}
})


export const MessageModel = mongoose.model<IChatMessage & mongoose.Document>('message',schema)