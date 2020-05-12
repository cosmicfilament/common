import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';

/**
 * Checks if currentUser is set on the request object
 * @param req 
 * @param res 
 * @param next 
 * 
 * @throws NotAuthorized Error
 */
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
	if (!req.currentUser) {
		throw new NotAuthorizedError();
	}
	// if there is a currentUser then all is cool so next
	next();
};
