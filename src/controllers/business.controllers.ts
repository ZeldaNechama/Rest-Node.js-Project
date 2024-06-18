import { Request, Response } from 'express';
import { Business as BusinessInterface } from '../models/business.models';
import * as businessService from '../services/business.services';

export const createBusiness = async (req: Request, res: Response) => {
  try {
    const business = await businessService.createBusiness(req.body as BusinessInterface);
    res.status(201).json(business);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create business' });
  }
};



export const updateBusinees = async (req: Request, res: Response) => {
  const businessId = req.params.id;
  console.log('Business ID:', businessId);
  const business = await businessService.updateBusiness(businessId, req.body);
  if (business) {
    res.json(business);
  } else {
    res.status(404).send("Business doesn't exist");
  }

}