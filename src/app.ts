import express from 'express';
import busineesRouter from "./routes/business.routes"
import errorHandler from './middlewares/errorHandler';

const app = express();

app.use(express.json());
app.use('/api/business',busineesRouter);
app.use(errorHandler);

export default app;
