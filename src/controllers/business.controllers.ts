import { Request, Response } from "express";
import { Business } from "../models/business.models";
import * as businessService from "../services/business.services"

export const createBusiness = async (req: Request, res: Response) => {
  const business = await businessService.createBusiness(req.body as Business);
    if (business) {
        res.status(201).json(business);
    } else {
        res.status(400).send("Cannot create Business- Business not defined");
    }
};


export const updateBusinees = async (req: Request, res: Response) => {
    const business = await businessService.updateBusinees(req.params.businessId, req.body);
    if (business) {
      res.json(business);
    } else {
      res.status(404).send("Business  dosn't exict");
    }

}