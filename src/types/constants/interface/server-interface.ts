import { Request, Response } from "express";
import { IUser } from "./user-interface";

export interface ExpressRequest extends Request{
    payload:ITokenPayload;
    user:IUser
}

export interface ExpressResponse extends Response{}

export interface ITokenPayload{
    user_id:string,
    role?:string,
    auth_id:string
}

export interface IToken {
    token?:string
}