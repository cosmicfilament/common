/**
  * @module database-connection-error.ts
  * @author John Butler
  * @description
*/
import { CustomError } from './custom-error';
export declare class DatabaseConnectionError extends CustomError {
    statusCode: number;
    reason: string;
    constructor();
    serializeErrors(): {
        message: string;
    }[];
}
