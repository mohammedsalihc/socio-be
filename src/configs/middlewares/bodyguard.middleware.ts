import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";


export const bodyGuard = (schema)=>(req:Request,res:Response,next:NextFunction)=>{
    try {
      schema.parse(req.body);
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(422).json({
          success: false,
          message: "Validation failed",
          errors: err.issues.map((e) => ({
            field: e.path.join("."),
            message: e.message,
          })),
        });
      }

      return res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
}


