"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PortfolioEntity = void 0;
const openapi = require("@nestjs/swagger");
const stock_entity_1 = require("../../stock/entities/stock.entity");
const trade_entity_1 = require("../../trade/entities/trade.entity");
const typeorm_1 = require("typeorm");
let PortfolioEntity = class PortfolioEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, trades: { required: true, type: () => require("../../trade/entities/trade.entity").TradeEntity }, stocks: { required: true, type: () => require("../../stock/entities/stock.entity").StockEntity } };
    }
};
exports.PortfolioEntity = PortfolioEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PortfolioEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => trade_entity_1.TradeEntity, (trade) => trade.portfolios),
    __metadata("design:type", trade_entity_1.TradeEntity)
], PortfolioEntity.prototype, "trades", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => stock_entity_1.StockEntity, (stock) => stock.stockId),
    __metadata("design:type", stock_entity_1.StockEntity)
], PortfolioEntity.prototype, "stocks", void 0);
exports.PortfolioEntity = PortfolioEntity = __decorate([
    (0, typeorm_1.Entity)()
], PortfolioEntity);
//# sourceMappingURL=portfolio.entity.js.map