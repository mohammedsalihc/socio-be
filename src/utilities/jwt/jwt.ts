import { IAuth } from "../../types/constants/interface/auth-interface"
import jwt from "jsonwebtoken"
import { ExpressRequest, ExpressResponse } from "../../types/constants/interface/server-interface"
import { NextFunction } from "express"
export const GenerateToken =  (auth:IAuth)=>{
    let payload = {role:auth?.role,phone:auth?.phone}
    return jwt.sign(payload,process.env.JWT_SECRET as string,{expiresIn:'7d'})
}


export const jwtVerification = async(req:ExpressRequest,res:ExpressResponse,next:NextFunction)=>{
    const token = req?.headers['authorization'] || req?.headers['Authorization'];
    if(!token){
        res.status(401).send('unauthorized');
    }else{
        jwt.verify(token,process.env.JWT_SECRET,async(err:any,decoded:any)=>{
            if(err){
              return res.status(401).send('unauthorized');
            }
            
        })
        
    }
}