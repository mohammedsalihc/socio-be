import express, { Application } from "express";
import cors from 'cors'
import { ErrorHandler } from "./error.middleware";
const middlewares = (app:Application) =>{
    app.use(cors()),
    app.use(express.urlencoded({ extended: false})),
    app.use(express.json( {limit: '10mb' } ))
    app.use(ErrorHandler)
}
export default middlewares