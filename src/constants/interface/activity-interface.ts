import { Moment } from "moment-timezone";
import { IAttachment } from "./setting-interface";
import { IUser } from "./user-interface";

export interface IActivities {
    _id:string,
    name:string,
    members: IUser[] | string[],
    images:IAttachment,
    info:string,
    date:Moment,
    created_at:Moment,
    created_by:Moment,
    location?:string
}