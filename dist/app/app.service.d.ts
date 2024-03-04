import { EnvService } from "../configs/env/services/env.service";
export declare class AppService {
    private envService;
    constructor(envService: EnvService);
    getHello(): Promise<string>;
}
