import mongoose, { Schema } from "mongoose";

export interface User{
    userName:string,
    password:string,
    email:string,
    userId:string
}
const UserSchema: Schema = new Schema({
    userId: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    userName: { type: String, required: true },
    email: { type: String, required: true },

  });
  
  export default mongoose.model<User>('User', UserSchema);