import { Request, Response } from 'express';
import { User as UserInterface } from '../models/users.models';
import * as userService from '../services/users.services';

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.createUser(req.body as UserInterface);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create business' });
  }
};