/// <reference types="qs" />
import { Request, Response, NextFunction } from 'express';
/**
 * Checks if currentUser is set on the request object
 *
 * @throws NotAuthorized Error which extends the base Error object
 */
export declare const requireAuth: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>, next: NextFunction) => void;
