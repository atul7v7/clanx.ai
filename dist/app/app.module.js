"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const database_module_1 = require("../modules/database/database.module");
const env_module_1 = require("../configs/env/env.module");
const rate_limiter_gaurd_1 = require("../configs/gaurds/rate-limiter.gaurd");
const core_1 = require("@nestjs/core");
const http_exception_1 = require("../utils/exceptions/http-exception");
const database_exception_1 = require("../utils/exceptions/database-exception");
const winston_1 = require("winston");
const stock_module_1 = require("../modules/stock/stock.module");
const portfolio_module_1 = require("../modules/portfolio/portfolio.module");
const trade_module_1 = require("../modules/trade/trade.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [rate_limiter_gaurd_1.Throttler, env_module_1.EnvModule, database_module_1.DatabaseModule, stock_module_1.StockModule, portfolio_module_1.PortfolioModule, trade_module_1.TradeModule],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            winston_1.Logger,
            {
                provide: core_1.APP_FILTER,
                useClass: database_exception_1.DatabaseExceptionFilter,
            },
            {
                provide: core_1.APP_FILTER,
                useClass: http_exception_1.HttpExceptionFilter,
            },
        ],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map