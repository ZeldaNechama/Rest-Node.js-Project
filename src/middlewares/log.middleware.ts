import { Request, Response, NextFunction } from 'express';
import logger from '../logger';

const logMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log('in log m');
  
  const { method, url, body, params, query } = req;
  const logMessage = `
  Method: ${method}
  URL: ${url}
  Body: ${JSON.stringify(body)}
  Params: ${JSON.stringify(params)}
  Query: ${JSON.stringify(query)}
  `;
  logger.debug(logMessage);
  next();
};

export default logMiddleware;
