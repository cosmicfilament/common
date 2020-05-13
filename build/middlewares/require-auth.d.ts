/// <reference types="qs" />
import { Request, Response, NextFunction } from 'express';
/**
 * Checks if currentUser is set on the request object
 * @param req
 * @param res
 * @param next
 *
 * @throws NotAuthorized Error
 */
export declare const requireAuth: (req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>, next: NextFunction) => void;
