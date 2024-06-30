import { Request, Response } from "express";
import * as authService from "../services/auth.services";


export const signUp = async (req: Request, res: Response) => {
  try {
    const user = await authService.signUp(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send("User wasn'y able to be created")
  }

}

export const signIn = async (req: Request, res: Response) => {
  try {
    const token = await authService.signIn(req.body);
    res.status(200).json(token)
  } catch (error) {
    res.status(400).send("User wasn't found");

  }



}