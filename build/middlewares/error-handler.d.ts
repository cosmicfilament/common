/// <reference types="qs" />
/**
  * @module error-handler.ts
  * @author John Butler
  * @description sends back an error object with an array of error messages in it
    * {
    *		errors: {
    * 		message: string, field?: string
    *		}[]
    *	}
    }
*/
import { Request, Response, NextFunction } from 'express';
export declare const errorHandler: (err: Error, req: Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs>, res: Response<any>, next: NextFunction) => Response<any> | undefined;
