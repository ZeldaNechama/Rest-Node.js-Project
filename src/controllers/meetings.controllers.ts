import { Request, Response } from 'express';
import { Meeting as MeetingInterface } from '../models/meetings.models';
import * as meetingService from '../services/meetings.services';

export const createMeeting = async (req: Request, res: Response) => {
  try {
    const meeting = await meetingService.createMeeting(req.body as MeetingInterface);
    res.status(201).json(meeting);
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Failed to create meeting' });
  }
};


export const updateMeeting = async (req: Request, res: Response) => {

    const meeting = await meetingService.updateMeeting(req.params.id, req.body);
    if (meeting) {
      res.json(meeting);
    } else {
      res.status(404).send("Meeting  dosn't exict");
    }

}

export const deleteMeeting =async(req:Request,res:Response)=>{
 const meeting=await meetingService.deleteMeeting(req.params.id);
 if(meeting){
    res.json(meeting);
 }
 else{
    res.send('wasnt able to delete this meeting');
 }

    
}