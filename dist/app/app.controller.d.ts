import { AppService } from "./app.service";
import { SuccessResponse } from "../utils/response/interfaces/success-response.interface";
export declare class AppController {
    private readonly appService;
    private logger;
    constructor(appService: AppService);
    getHello(): SuccessResponse<string>;
}
