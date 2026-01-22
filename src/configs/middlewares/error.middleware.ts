import { NextFunction } from "express";
import { success } from "zod";
import { ExpressRequest, ExpressResponse } from "../../types/constants/interface/server-interface";
import { ApiError } from "../../utilities/custom/apierror";

export const ErrorHandler = (err:any,req:ExpressRequest,res:ExpressResponse,next:NextFunction)=>{
    console.log("error came to middleware",err)
    if(err instanceof ApiError){
        return res.status(err.statusCode).json({
            success:false,
            message:err.message
        })
    }
    return res.status(500).json({
    success: false,
    message: "Internal server error",
  });
}