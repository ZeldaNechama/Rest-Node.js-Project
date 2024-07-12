import mongoose from 'mongoose';
import Service, { Service as ServiceInterface } from '../models/services.models'

export const getAllServices = async (): Promise<Array<ServiceInterface> | null> => {
    try {
  
      return await Service.find();
  
    } catch (error) {
      console.log("Services dosn't exict.");
      return null;
  
  
    }
  
  }
  
  export const getService = async (businessId: string): Promise<ServiceInterface | null> => {
    try {
     return await Service.findById(businessId);
     
    } catch (error) {
      console.log('Service dosnt exict');
      return null;
    }
  
  }

export const createService = async (service: ServiceInterface): Promise<ServiceInterface> => {
    const newService = new Service(service);
    return await newService.save();
};


export const updateService = async (id: string, service: ServiceInterface) => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.error('Invalid ObjectId:', id);
        return null;
    }

    try {
        return await Service.findByIdAndUpdate(id, service, { new: true });
    } catch (error) {
        console.log('Cannot update service', error);
        return null;
    }

}
export const deleteSercice = async (id: string) => {
    try {
        return await Service.findByIdAndDelete(id);

    } catch (error: any) {
        console.log("Can't delete Service", error.message);
        return null;

    }
}