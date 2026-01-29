import { ActivityModel } from "../models/activity/activity-model";
import { IActivities } from "../types/constants/interface/activity-interface";

export const create = async (body:Partial<IActivities>):Promise<IActivities>=>{
    return await ActivityModel.create(body)
}