"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupConfig = exports.loadConfigFile = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const config_1 = require("@nestjs/config");
const env_namespace_enum_1 = require("./enums/env-namespace.enum");
function loadConfigFile() {
    const ENVIRONMENT = process.env.ENVIRONMENT || "development";
    const envFilePath = (0, path_1.join)("src", "configs", "env", `.env.${ENVIRONMENT}.json`);
    return JSON.parse((0, fs_1.readFileSync)(envFilePath, "utf-8"));
}
exports.loadConfigFile = loadConfigFile;
const setupConfig = () => {
    const envVariables = loadConfigFile();
    const appConfig = (0, config_1.registerAs)(env_namespace_enum_1.EnvNamespace.APP_CONFIG, () => envVariables.APP_CONFIG);
    const rateLimiterConfig = (0, config_1.registerAs)(env_namespace_enum_1.EnvNamespace.RATE_LIMITTER_CONFIG, () => envVariables.RATE_LIMITTER_CONFIG);
    const openWeatherConfig = (0, config_1.registerAs)(env_namespace_enum_1.EnvNamespace.OPEN_WEATHER_CONFIG, () => envVariables.OPEN_WEATHER_CONFIG);
    return [appConfig, rateLimiterConfig, openWeatherConfig];
};
exports.setupConfig = setupConfig;
//# sourceMappingURL=setup.config.js.map