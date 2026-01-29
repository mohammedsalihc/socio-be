import { NextFunction, request, response } from "express";
import { ExpressRequest, ExpressResponse } from "../../types/constants/interface/server-interface";
import { IActivities } from "../../types/constants/interface/activity-interface";
import { ActivityListing, CreateActivity, viewDetail } from "../../services/activity.service";
import { jsonResponse } from "../../utilities/controller";

export const RegisterActivity = async(req:ExpressRequest, res:ExpressResponse, next:NextFunction)=>{
    try {
        let body:IActivities = request.body
        let user = req.user;
        let activity_detail= await CreateActivity(body,user);
        jsonResponse(response,activity_detail)
    } catch (error) {
        next(error)
    }
}

export const ListActivity = async(req:ExpressRequest,res:ExpressResponse,next:NextFunction)=>{
    try{
        let latitude = req?.query?.latitude;
        let longitude = req?.query.longitude ;
        const activities = ActivityListing(latitude,longitude,req?.user);
        jsonResponse(response,activities);
    }catch(error){
        next(error)
    }
}

export const ActivityDetial = async(req:ExpressRequest,res:ExpressResponse,next:NextFunction)=>{
    try{
        const _id = req?.params?.id;
        let activity_detail = await viewDetail(_id as string ,req?.user)
        jsonResponse(response,activity_detail)
    }catch(error){
        next(error)
    }
}