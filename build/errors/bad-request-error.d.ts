/**
  * @module bad-request-error.ts
  * @author John Butler
  * @description
*/
import { CustomError } from './custom-error';
export declare class BadRequestError extends CustomError {
    message: string;
    statusCode: number;
    constructor(message: string);
    serializeErrors(): {
        message: string;
    }[];
}
