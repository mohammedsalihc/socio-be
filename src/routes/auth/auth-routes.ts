import { Router } from "express";
import { bodyGuard } from "../../configs/middlewares/bodyguard.middleware";
import { registrationSchema } from "../../schema/auth.schema";
import { Register } from "../../controllers/auth/auth-controller";

const router = Router();
router.post('/register',bodyGuard(registrationSchema) , Register)

export default router;