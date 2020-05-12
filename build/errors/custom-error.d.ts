/**
  * @module custom-error.ts
  * @author John Butler
  * @description
*/
export declare abstract class CustomError extends Error {
    abstract statusCode: number;
    constructor(message: string);
    abstract serializeErrors(): {
        message: string;
        field?: string;
    }[];
}
