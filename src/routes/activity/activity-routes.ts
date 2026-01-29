import { Router } from "express";
import { bodyGuard } from "../../configs/middlewares/bodyguard.middleware";
import { activitySchema } from "../../schema/activity.Schema";
import { ActivityDetial, ListActivity, RegisterActivity } from "../../controllers/activity/activity-controller";
import { jwtVerification } from "../../utilities/jwt/jwt";

const router = Router()

router.post('/create-activity', jwtVerification , bodyGuard(activitySchema),RegisterActivity)
router.get('/activities',jwtVerification ,ListActivity);
router.get('/activity/:id',jwtVerification,ActivityDetial)
export default router;