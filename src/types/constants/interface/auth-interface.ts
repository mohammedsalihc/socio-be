import { ERole } from "../enum/auth-enum";
import { IUser } from "./user-interface";

export interface IAuth extends IUser{
    _id?: string,
    user?: string,
    phone?:string,
    password?: string,
    role?: ERole
    
}

