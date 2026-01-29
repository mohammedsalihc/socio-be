import { Moment } from "moment-timezone";
import { IAttachment } from "./setting-interface";
import { IUser } from "./user-interface";

export interface IActivities {
    _id?:string,
    name?:string,
    members?: IUser[] | string[],
    images?:IAttachment,
    info?:string,
    start_date?:Moment,
    end_date?:Moment,
    created_at?:Moment,
    created_by?:IUser|string,
    location?:string
    active?:boolean
    coordinates?:ICoordinates,
    latitude?:any,
    longitude?:any
}


export interface ICoordinates{
    type?:string,
    coordinates?:number[]
}