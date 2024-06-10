import { Request, Response } from 'express';
import { Service as ServiceInterface } from '../models/services.models';
import * as serviceService from '../services/services.services';

export const createService = async (req: Request, res: Response) => {
  try {
    const service = await serviceService.createService(req.body as ServiceInterface);
    res.status(201).json(service);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create service' });
  }
};


export const updateService = async (req: Request, res: Response) => {

    const service = await serviceService.updateService(req.params.id, req.body);
    if (service) {
      res.json(service);
    } else {
      res.status(404).send("Service  dosn't exict");
    }

}

export const deleteSercice =async(req:Request,res:Response)=>{
 const service=await serviceService.deleteSercice(req.params.id);
 if(service){
    res.json(service);
 }
 else{
    res.send('wasnt able to delete this service');
 }

    
}