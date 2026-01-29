import moment from "moment-timezone";
import { IActivities } from "../types/constants/interface/activity-interface";
import { ApiError } from "../utilities/custom/apierror";
import { ErrorMessages } from "../types/constants/constants";
import { IUser } from "../types/constants/interface/user-interface";
import { Ecordinates } from "../types/constants/enum/common-enum";
import { create, Detail, List } from "../repository/activity.repo";

export const CreateActivity = async(body:IActivities,user:IUser)=>{
    let start_date = body.start_date = moment(body?.start_date);
    let end_date = body.end_date = moment(body?.end_date);
    if(start_date.isBefore(moment().utc())){
        throw new ApiError(400,ErrorMessages.Invalid_start_date)
    }
    if(end_date.isBefore(moment().utc())){
        throw new ApiError(400,ErrorMessages.Invalid_end_date)
    }
    let coordinates = { type: Ecordinates.POINT, coordinates: [body?.longitude, body?.latitude] }
    let activity:IActivities={
        created_by:user?._id,
        end_date,
        start_date,
        coordinates,
        name:body?.name,
        info:body?.info 
    }
    return await  create(activity)
}

export const ActivityListing = async (latitude,longitude,user:IUser)=>{
    return await List({longitude,latitude})
}


export const viewDetail = async(activity_id:string,user:IUser)=>{
    return await Detail({_id:activity_id as string})
}