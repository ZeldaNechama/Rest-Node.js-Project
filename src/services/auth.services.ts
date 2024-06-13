import bcrypt from 'bcrypt';
import User,{User as userInterface} from '../models/users.models';
import jwt from 'jsonwebtoken';

export const signUp=async(userData:any):Promise<userInterface|undefined>=>{
    const newUser=userData as userInterface;
    const hashPassword=await bcrypt.hash(newUser.password,10);
    newUser.password=hashPassword;
    const user=new User(newUser);
    // if(!user)
    //     return undefined;
    await user.save();
    return user;
}

export const signIn= async(userData:any)=>{
    const new_user= userData as userInterface;
    const user= await User.findById(new_user.userId);
    if(!user){
        throw new Error("User wasn't found");
    }
    const isMatch=await bcrypt.compare(user.password,new_user.password);
    if(!isMatch){
        throw new Error("Invailed password");
    }
    const token=jwt.sign({id:user.id},'hfjQ211123!!%^$#~FF123nmdfa');
    return token;

}