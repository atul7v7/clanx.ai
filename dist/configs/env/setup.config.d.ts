import { EnvConfig } from "./env.config";
import { ConfigFactory } from "@nestjs/config";
import { AppConfig } from "./app.config";
import { RateLimitterConfig } from "./rate-limitter.config";
import { OpenWeatherConfig } from "./open-weather.config";
export declare function loadConfigFile(): EnvConfig;
export declare const setupConfig: () => [
    ConfigFactory<AppConfig>,
    ConfigFactory<RateLimitterConfig>,
    ConfigFactory<OpenWeatherConfig>
];
