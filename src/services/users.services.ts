import User, { User as UserInterface } from '../models/users.models';


export const createUser = async (user: UserInterface): Promise<UserInterface | null> => {
  try {
    const newUser = new User(user);
    return await newUser.save();
  } catch (error:any) {
    if (error.code === 11000) { 
      console.error('Duplicate key error:', error.message);
      return null;
    }
    console.error('Error creating business:', error);
    return null;
  }
};