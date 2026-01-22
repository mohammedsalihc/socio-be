import { IAuth } from "../../types/constants/interface/auth-interface"
import jwt from "jsonwebtoken"
export const GenerateToken =  (auth:IAuth)=>{
    let payload = {role:auth?.role,phone:auth?.phone}
    return jwt.sign(payload,process.env.JWT_SECRET as string,{expiresIn:'7d'})
}