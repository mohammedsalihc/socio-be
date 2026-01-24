import { Router } from "express";
import { bodyGuard } from "../../configs/middlewares/bodyguard.middleware";
import { activitySchema } from "../../schema/activity.Schema";
import { Activity } from "../../controllers/activity/activity-controller";

const router = Router()

router.post('/create-activity',bodyGuard(activitySchema),Activity)

export default router;