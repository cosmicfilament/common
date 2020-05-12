/**
  * @module not-found-error.ts
  * @author John Butler
  * @description
*/
import { CustomError } from './custom-error';
export declare class NotFoundError extends CustomError {
    statusCode: number;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
