import { Application } from "express";
import auth_routes from "./auth/auth-routes";
import activity_routes from './activity/activity-routes'
const ApiEndpoints = (app:Application)=>{
    app.get('/',(req,res)=>{
        res.send('WELCOME TO SOCIO BACKEND')
    })
    app.use('/auth',auth_routes)
    
}


export default ApiEndpoints