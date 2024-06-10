import express from 'express';
import bodyParser from "body-parser";
import busineesRouter from "./routes/business.routes";
import serviceRouter from './routes/services.routes';
import meetingRouter from './routes/meetings.routes';
import userRouter from './routes/users.routes';
import errorHandler from './middlewares/errorHandler';
import connectDB from './database';

const app = express();
connectDB();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api/business',busineesRouter);
app.use('/api/service',serviceRouter);
app.use('/api/meeting',meetingRouter);
app.use('/api/user',userRouter);
app.use(errorHandler);

export default app;
