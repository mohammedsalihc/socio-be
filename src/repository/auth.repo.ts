import { AuthModel } from "../models/auth/auth-model";
import { IAuth } from "../types/constants/interface/auth-interface";
import { objectSanitizer } from "../utilities/custom/validators";

export const createAuth = async (body:IAuth):Promise<IAuth>=>{
    return await AuthModel.create(body)
}

export const findAuth = async(filter:IAuth):Promise<IAuth>=>{
    let query = objectSanitizer(filter);
     if (!Object.keys(query).length) {
        return null
    }
    return await AuthModel.findOne(query)
}