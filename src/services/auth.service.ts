import { UserModel } from "../models/user/user-model";
import { createAuth, findAuth } from "../repository/auth.repo";
import { findUser } from "../repository/user.repo";
import { ErrorMessages } from "../types/constants/constants";
import { ERole } from "../types/constants/enum/auth-enum";
import { IAuth } from "../types/constants/interface/auth-interface";
import { IUser } from "../types/constants/interface/user-interface";
import { ApiError } from "../utilities/custom/apierror";
import bcrypt from 'bcrypt'
import { GenerateToken } from "../utilities/jwt/jwt";

export const RegisterUser = async (body:IAuth)=>{
    const check_exist = await findUser({phone:body?.phone})
    if(check_exist){
        throw new ApiError(404,ErrorMessages.user_exist)
    }
    body.password = await bcrypt.hash(body?.password as string);
    const auth = await createAuth({phone:body?.phone,password:body?.password , role:ERole.USER})
    const token = await GenerateToken(auth)
    return {token};
}


export const UserLogin = async(body:IAuth)=>{
    const auth = await findAuth({phone:body?.phone});
    if(!auth){
        throw new ApiError(404,ErrorMessages.user_not_found)
    }
    const pass_check = bcrypt.compare(body?.password,auth?.password);
    if(!pass_check){
        throw new ApiError(400,ErrorMessages.invalid_password)
    }
    const token = GenerateToken(auth);
    return {token};
}