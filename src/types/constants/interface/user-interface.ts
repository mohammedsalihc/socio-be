import { Moment } from "moment-timezone"
import { IAuth } from "./auth-interface";
import { IAttachment } from "./setting-interface";

export interface IUser{
    _id?:string,
    name?: string,
    phone?:string,
    email?:string,
    profile_pic?:IAttachment |{},
    registered_on?:Moment,
}