import mongoose, {Schema} from "mongoose";
import { Ecordinates } from "../../types/constants/enum/common-enum";
import { IActivities } from "../../types/constants/interface/activity-interface";
const attachment_schema = new mongoose.Schema({
    url: { type: String },
    key: { type: String }
})

const activity_schema = new mongoose.Schema({
    name:{type:String,required:true},
    members:[{type:Schema.Types.ObjectId,ref:"user"}],
    images: { type: [attachment_schema], default: [] },
    info: { type: String },
    date:{type:Date},
    created_at: { type: Date, default: Date.now() },
    created_by: { type: Schema.Types.ObjectId, ref: "user" },
    location:{type:String},
    active:{type:Boolean,default:false},
    coordinates: {
        type: {
          type: String,
          enum: [Ecordinates.POINT],
        },
        coordinates: {
          type: [Number]
        }
      },
})
activity_schema.index({ coordinates: '2dsphere' });
export const ActivityModel = mongoose.model<IActivities & mongoose.Document>('activities', activity_schema)