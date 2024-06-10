import mongoose, { Document, Schema } from "mongoose";

export interface Business extends Document{
    businessId:string,
    userId:string
}
const BusinessSchema: Schema = new Schema({
    businessId: { type: String, required: true, unique: true },
    userId: { type: String, required: true },
  });
  
  export default mongoose.model<Business>('Business', BusinessSchema);