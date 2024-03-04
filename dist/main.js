"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app/app.module");
const swagger_setup_1 = require("./configs/swagger/swagger.setup");
const env_service_1 = require("./configs/env/services/env.service");
const env_namespace_enum_1 = require("./configs/env/enums/env-namespace.enum");
const common_1 = require("@nestjs/common");
const winston_logger_1 = require("./utils/logger/winston-logger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        logger: (0, winston_logger_1.createWinstonLoggerService)(),
    });
    const envService = app.get(env_service_1.EnvService);
    const port = envService.getEnvValue(env_namespace_enum_1.EnvNamespace.APP_CONFIG).port;
    (0, swagger_setup_1.swaggerSetup)(app);
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map