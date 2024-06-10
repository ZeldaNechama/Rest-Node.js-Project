import mongoose, { Schema } from "mongoose";

export interface Meeting{
    serviceId:string,
    businessId:string,
    startTime:number,
    duration:number,
    meeting:any
}
const MeetingSchema: Schema = new Schema({
    serviceId: { type: String, required: true, unique: true },
    businessId: { type: String, required: true },
    startTime:{type:Number,required:true},
    duration:{type:Number,required:true},
    meeting:{type:Object,required:true}
  });
  
  export default mongoose.model<Meeting>('Meeting', MeetingSchema);