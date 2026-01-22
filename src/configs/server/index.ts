import express, { Application } from 'express'
import middlewares from '../middlewares'
import ApiEndpoints from '../../routes'
const app:Application = express()
const startServer = ()=>{
    let port = process.env.PORT 
    middlewares(app);
    ApiEndpoints(app)
    const server = app.listen(port,()=>console.log("server connected : ",port))
}



export {startServer,app}