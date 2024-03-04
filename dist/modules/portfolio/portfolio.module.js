"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioModule = void 0;
const common_1 = require("@nestjs/common");
const portfolio_repository_1 = require("./repositories/portfolio.repository");
const portfolio_service_1 = require("./services/portfolio.service");
const portfolio_controller_1 = require("./controllers/portfolio.controller");
const typeorm_1 = require("@nestjs/typeorm");
const portfolio_entity_1 = require("./entities/portfolio.entity");
const trade_module_1 = require("../trade/trade.module");
const stock_module_1 = require("../stock/stock.module");
let PortfolioModule = class PortfolioModule {
};
exports.PortfolioModule = PortfolioModule;
exports.PortfolioModule = PortfolioModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([portfolio_entity_1.PortfolioEntity]),
            stock_module_1.StockModule,
            trade_module_1.TradeModule
        ],
        providers: [
            portfolio_repository_1.PortfolioRepository,
            portfolio_service_1.PortfolioService
        ],
        controllers: [
            portfolio_controller_1.PortfolioController
        ]
    })
], PortfolioModule);
//# sourceMappingURL=portfolio.module.js.map