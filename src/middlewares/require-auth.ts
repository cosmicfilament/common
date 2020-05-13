import { Request, Response, NextFunction } from 'express';
import { NotAuthorizedError } from '../errors/not-authorized-error';

/**
 * Checks if currentUser is set on the request object
 * 
 * @throws NotAuthorized Error which extends the base Error object
 */
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
	if (!req.currentUser) {
		throw new NotAuthorizedError();
	}
	// if there is a currentUser then all is cool so next
	next();
};
