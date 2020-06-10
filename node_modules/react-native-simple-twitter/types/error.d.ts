import { ErrorResponse } from './types';
export default class CustomError extends Error {
    errors: ErrorResponse;
    constructor(obj: ErrorResponse);
}
