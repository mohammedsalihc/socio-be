import { Router } from "express";
import { bodyGuard } from "../../configs/middlewares/bodyguard.middleware";
import { activitySchema } from "../../schema/activity.Schema";
import { RegisterActivity } from "../../controllers/activity/activity-controller";
import { jwtVerification } from "../../utilities/jwt/jwt";

const router = Router()

router.post('/create-activity', jwtVerification , bodyGuard(activitySchema),RegisterActivity)

export default router;