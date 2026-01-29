import { ActivityModel } from "../models/activity/activity-model";
import { Ecordinates } from "../types/constants/enum/common-enum";
import { IActivities } from "../types/constants/interface/activity-interface";
import { objectSanitizer } from "../utilities/custom/validators";

export const create = async (body:Partial<IActivities>):Promise<IActivities>=>{
    return await ActivityModel.create(body)
}

export const List = async(filter:Partial<IActivities>):Promise<IActivities[]>=>{
    let query = objectSanitizer(filter);
    let meters = 50000;
    query.coordinates ={
        $near: {
                $geometry: {
                    type: Ecordinates.POINT,
                    coordinates:[query?.longitude,query?.latitude],
                },
                $maxDistance: meters,
            },
    }
    return await ActivityModel.find(query)
}

export const Detail = async(filter:IActivities):Promise<IActivities>=>{
    let query = objectSanitizer(filter);
    return await ActivityModel.findOne(query)
}