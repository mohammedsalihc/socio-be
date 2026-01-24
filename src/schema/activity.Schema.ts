import {z} from 'zod'
export const activitySchema = z.object({
    name:z.string().min(3,{message:"name is required"}).max(10,{message:'name is too long'}),
    members: z.array(z.string({ message: "Invalid member id" })).optional(),

})