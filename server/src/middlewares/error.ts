import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../helpers/ApiErrors';

export const errorMiddleware = (
    error: Error & Partial<ApiError>,
    //@ts-ignore
    req: Request,
    res: Response,
    //@ts-ignore
    next: NextFunction) => {
    const statusCode = error.statusCode ?? 500;
    const message = error.statusCode ? error.message : 'Internal server error';
    return res.status(statusCode).json({ message });

}