import { NextFunction, Request, response, Response } from "express";
import { ExpressRequest, ExpressResponse, IToken, ITokenPayload } from "../../types/constants/interface/server-interface";
import { RegisterUser, UserLogin } from "../../services/auth.service";
import { jsonResponse } from "../../utilities/controller";

export const Register = async (req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
  try {
    let body = req?.body;
    const token: IToken = await RegisterUser(body);
    return jsonResponse(response,{token});
  } catch (e) {
    next(e)
  }
}

export const Login = async (req: ExpressRequest, res: ExpressResponse, next: NextFunction) => {
  try {
    let body = req.body;
    const token: IToken = await UserLogin(body)
    return jsonResponse(response,{token})
  } catch (e) {
    next(e)
  }
}