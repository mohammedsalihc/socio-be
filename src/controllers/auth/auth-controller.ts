import { NextFunction, Request, Response } from "express";
import { ControllerHandler } from "../../utilities/controller";
import { ExpressRequest, ExpressResponse, IToken, ITokenPayload } from "../../types/constants/interface/server-interface";
import { RegisterUser, UserLogin } from "../../services/auth.service";

export const Register = async (req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
  try {
    let body = req?.body;
    const token: IToken = await RegisterUser(body);
    return token;
  } catch (e) {
    next(e)
  }
}

export const Login = async (req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
  try {
    let body = req.body;
    const token: IToken = await UserLogin(body)
    return token
  } catch (e) {
    next(e)
  }
}