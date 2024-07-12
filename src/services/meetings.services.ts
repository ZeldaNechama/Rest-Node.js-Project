import mongoose from 'mongoose';
import Meeting, { Meeting as MeetingInterface } from '../models/meetings.models';

export const getAllMeetings = async (): Promise<Array<MeetingInterface> | null> => {
    try {
  
      return await Meeting.find();
  
    } catch (error) {
      console.log("Meetings dosn't exict.");
      return null;
  
  
    }
  
  }
  
  export const getMeeting = async (meetingId: string): Promise<MeetingInterface | null> => {
    try {
     return await Meeting.findById(meetingId);
     
    } catch (error) {
      console.log('Meeting dosnt exict');
      return null;
    }
  
  }

export const createMeeting = async (meeting: MeetingInterface): Promise<MeetingInterface> => {
    try {
        const endTime = meeting.startTime + meeting.duration;

        const conflictingMeeting = await Meeting.findOne({
            businessId: meeting.businessId,
            $or: [
                {
                    startTime: { $lt: endTime },
                    $expr: { $gt: [{ $add: ["$startTime", "$duration"] }, meeting.startTime] }
                }
            ]
        });

        if (conflictingMeeting) {
            throw new Error('Meeting time conflicts with an existing meeting.');
        }

        const createdMeeting = new Meeting(meeting);
        return await createdMeeting.save();
    } catch (error) {
        if (error instanceof Error) {
            // Handle specific Mongoose errors or other errors here
            throw new Error(`Failed to create meeting: ${error.message}`);
        }
        throw error; // Rethrow any other unexpected errors
    }
}

export const updateMeeting = async (id: string, meeting: MeetingInterface) => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.error('Invalid ObjectId:', id);
        return null;
    }

    try {
        return await Meeting.findByIdAndUpdate(id, meeting, { new: true });
    } catch (error) {
        console.log('Cannot update meeting', error);
        return null;
    }

}
export const deleteMeeting = async (id: string) => {
    try {
        return await Meeting.findByIdAndDelete(id);

    } catch (error: any) {
        console.log("Can't delete Meeting", error.message);
        return null;

    }
}