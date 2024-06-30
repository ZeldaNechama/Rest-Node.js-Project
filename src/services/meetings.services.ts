import mongoose from 'mongoose';
import Meeting, { Meeting as MeetingInterface } from '../models/meetings.models'

export const createMeeting = async (meeting: MeetingInterface): Promise<MeetingInterface> => {
    const endTime = meeting.startTime + meeting.duration;

    const conflictingMeeting = await Meeting.findOne({
        businessId: meeting.businessId,
        $or: [
            { startTime: { $lt: endTime, $gt: meeting.startTime } },
            { startTime: { $lte: meeting.startTime }, duration: { $gte: meeting.duration } }
        ]
    });

    if (conflictingMeeting) {
        throw new Error('Meeting time conflicts with an existing meeting.');
    }

    const createdMeeting = new Meeting(meeting);
    return await createdMeeting.save();

}
export const updateMeeting = async (id: string, meeting: MeetingInterface) => {

    if (!mongoose.Types.ObjectId.isValid(id)) {
        console.error('Invalid ObjectId:', id);
        return null;
    }

    try {
        return await Meeting.findByIdAndUpdate(id, meeting, { new: true });
    } catch (error) {
        console.log('Cannot update service', error);
        return null;
    }

}
export const deleteMeeting = async (id: string) => {
    try {
        return await Meeting.findByIdAndDelete(id);

    } catch (error: any) {
        console.log("Can't delete Service", error.message);
        return null;

    }
}