import { NextFunction, request } from "express";
import { ExpressRequest, ExpressResponse } from "../../types/constants/interface/server-interface";
import { IActivities } from "../../types/constants/interface/activity-interface";
import { CreateActivity } from "../../services/activity.service";

export const Activity = async(req:ExpressRequest, res:ExpressResponse, next:NextFunction)=>{
    try {
        let body:IActivities = request.body
        let activity_detail= await CreateActivity(body)
    } catch (error) {
        next(error)
    }
}