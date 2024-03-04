import { ErrorResponse } from "./interfaces/error-response.interface";
import { PagerOptions } from "./interfaces/pager-options.interface";
import { SuccessResponse } from "./interfaces/success-response.interface";
export declare class ResponseHandler {
    static success<T>(data: T, pagerOptions?: PagerOptions): SuccessResponse<T>;
    static error(message: string, data?: object | undefined): ErrorResponse;
}
