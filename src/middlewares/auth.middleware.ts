import { Request, Response,NextFunction } from "express";
import jwt from  "jsonwebtoken";

interface AuthRequest extends Request {
    userID?: any;
  }
 const authMiddleware = async (req:AuthRequest, res:Response, next:NextFunction) => {
  console.log('in midleware');
  
    const token =
    req.body.token || req.query.token || req.headers["x-access-token"] || req.headers['authorization']?.split(' ').pop();

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = jwt.verify(token, process.env.TOKEN_KEY!);
    req.userID = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};
export default authMiddleware;