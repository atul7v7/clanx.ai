import { ArgumentsHost, ExceptionFilter } from "@nestjs/common";
import { HttpAdapterHost } from "@nestjs/core";
export declare class DatabaseExceptionFilter implements ExceptionFilter {
    private readonly httpAdapterHost;
    private logger;
    constructor(httpAdapterHost: HttpAdapterHost);
    catch(exception: any, host: ArgumentsHost): void;
}
