import mongoose, { Schema } from "mongoose";

export interface Service{
    businessId:string,
    serviceId:string,
    serviceData:any
}

const ServiceSchema: Schema = new Schema({
    businessId: { type: String, required: true, unique: true },
    serviceId: { type: String, required: true },
    serviceData:{type:Object,required:true}
  });
  
  export default mongoose.model<Service>('Service', ServiceSchema);