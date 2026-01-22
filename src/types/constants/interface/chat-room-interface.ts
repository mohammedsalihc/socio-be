import { Moment } from "moment-timezone"
import { IAttachment } from "./setting-interface"
import { IUser } from "./user-interface"
import { EMembersStatus } from "../enum/auth-enum"

export interface IchatRoomMember{
    _id?:string
    user?:string | IUser,
    created_at?:Moment
    status?:EMembersStatus
    user_name?:string
}

export interface IchatRoom{
    _id?:string
    name?:string,
    members?:IchatRoomMember[] | [],
    last_message?:string | IChatMessage,
    location?:string,
    description?:string,
    created_by?:string | IUser,
    created_at?:Moment,
    updated_at?:Moment
}

export interface IChatMessage {
    _id?:string
    chat_room?: string | IchatRoom;
    user?: string | IUser;
    message?: string;
    attachment?: IAttachment[];
    seen_by?: string[] | IUser[];
    delete_for_myself?: string[] | IUser[];
    delete_for_everyone?: boolean;
    created_at?: Moment;
}
