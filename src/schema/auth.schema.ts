import {z} from 'zod'
export const registrationSchema = z.object({
    name:z.string().min(3,{message:"name is required"}).max(10,{message:'name is too long'}),
    phone:z.string() .regex(/^[0-9]{10}$/, { message: "Phone number must be exactly 10 digits" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
})


export const LoginSchema = z.object({
   phone:z.string() .regex(/^[0-9]{10}$/, { message: "Phone number must be exactly 10 digits" }),
   password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
})