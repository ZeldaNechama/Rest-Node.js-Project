import bcrypt from 'bcrypt';
import User,{User as userInterface} from '../models/users.models';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();


export const signUp=async(userData:any):Promise<userInterface|undefined>=>{
    const newUser=userData as userInterface;
    const existingUser = await User.findOne({ userId: newUser.userId });

    if (existingUser) { 
    console.log('existingUser');
      throw new Error('User already exists');
    }
    const hashPassword=await bcrypt.hash(newUser.password,10);
    newUser.password=hashPassword;
    const user=new User(newUser);
    // if(!user)
    //     return undefined;
    await user.save();
    return user;
}
export const signIn = async (userData: any) => {
    const new_user = userData as userInterface;
    const user = await User.findOne({ userId: new_user.userId });

    // הוספת הדפסת נתונים לצורך ניפוי באגים
    console.log("User from DB:", user);
    console.log("Password from request:", new_user.password);

    if (!user) {
        throw new Error("User wasn't found");
    }

    // השוואת הסיסמאות
    const isMatch = await bcrypt.compare(new_user.password, user.password);
    console.log("Password match:", isMatch);

    if (!isMatch) {
        throw new Error("Invalid password");
    }

    const token = jwt.sign({ id: user.userId }, process.env.TOKEN_KEY!);
    return token;
}
