import { Router } from "express";
import { bodyGuard } from "../../configs/middlewares/bodyguard.middleware";
import { LoginSchema, registrationSchema } from "../../schema/auth.schema";
import { Login, Register } from "../../controllers/auth/auth-controller";

const router = Router();
router.post('/register',bodyGuard(registrationSchema) , Register)
router.post('/login',bodyGuard(LoginSchema),Login)
export default router;