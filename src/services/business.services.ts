import mongoose from 'mongoose';
import Business, { Business as BusinessInterface } from '../models/business.models';


export const createBusiness = async (business: BusinessInterface): Promise<BusinessInterface | null> => {
  try {
    const newBusiness = new Business(business);
    return await newBusiness.save();
  } catch (error: any) {
    if (error.code === 11000) { 
      console.error('Duplicate key error:', error.message);
      return null;
    }
    console.error('Error creating business:', error);
    return null;
  }
};

export const updateBusiness = async (id: string, business: BusinessInterface): Promise<BusinessInterface | null> => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    console.error('Invalid ObjectId:', id);
    return null;
  }

  try {
    return await Business.findByIdAndUpdate(id, business, { new: true });
  } 
  catch (error) 
  {
    console.log('Cannot update business', error);
    return null;
  }
};



