import { NextFunction, request, response } from "express";
import { ExpressRequest, ExpressResponse } from "../../types/constants/interface/server-interface";
import { IActivities } from "../../types/constants/interface/activity-interface";
import { CreateActivity } from "../../services/activity.service";
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
        
    }catch(error){
        next(error)
    }
}