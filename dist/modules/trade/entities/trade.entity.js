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
exports.TradeEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const trade_type_enum_1 = require("../enums/trade-type.enum");
const portfolio_entity_1 = require("../../portfolio/entities/portfolio.entity");
let TradeEntity = class TradeEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { tradeId: { required: true, type: () => Number }, type: { required: true, enum: require("../enums/trade-type.enum").TradeTypeEnum }, price: { required: true, type: () => Number }, quantity: { required: true, type: () => Number }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, portfolios: { required: true, type: () => [require("../../portfolio/entities/portfolio.entity").PortfolioEntity] } };
    }
};
exports.TradeEntity = TradeEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TradeEntity.prototype, "tradeId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], TradeEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TradeEntity.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], TradeEntity.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        type: 'datetime',
        name: 'createdAt',
        default: () => 'CURRENT_TIMESTAMP(2)',
        precision: 2,
    }),
    __metadata("design:type", Date)
], TradeEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        type: 'datetime',
        name: 'updatedAt',
        default: () => 'CURRENT_TIMESTAMP(2)',
        precision: 2,
        onUpdate: 'CURRENT_TIMESTAMP(2)',
    }),
    __metadata("design:type", Date)
], TradeEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => portfolio_entity_1.PortfolioEntity, (portfolio) => portfolio.trades),
    __metadata("design:type", Array)
], TradeEntity.prototype, "portfolios", void 0);
exports.TradeEntity = TradeEntity = __decorate([
    (0, typeorm_1.Entity)('trades')
], TradeEntity);
//# sourceMappingURL=trade.entity.js.map