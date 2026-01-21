import { ERole } from "../enum/auth-enum";

export interface IAuth{
    _id?: string,
    user?: string,
    password?: string,
    role?: ERole
}

