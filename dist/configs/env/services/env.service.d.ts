import { ConfigService } from "@nestjs/config";
import { EnvNamespace } from "../enums/env-namespace.enum";
export declare class EnvService {
    private configService;
    constructor(configService: ConfigService);
    getEnvValue<T>(namespaceKey: EnvNamespace): T;
}
