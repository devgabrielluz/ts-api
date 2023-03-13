//ERROR HANDLER

import { Request, Response, NextFunction, Router } from 'express';

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err) {
    return res.status(500).json({ error: err.message });
  }
  next();
};