import {z} from 'zod'
export const activitySchema = z.object({
    name:z.string().min(3,{message:"name is required"}).max(10,{message:'name is too long'}),
    location:z.string().min(3,{message:"location is required"}).max(50,{message:"location is too long"}),
    start_date:z.date({message:"start date is required"}),
    end_date:z.date({message:"end date is required"}),
    latitude:z.number({message:"latitude is required"}),
    longitude:z.number({message:"longitude is required"})
})