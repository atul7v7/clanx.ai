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
exports.TradeDto = void 0;
const openapi = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
const trade_type_enum_1 = require("../enums/trade-type.enum");
class TradeDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { tradeId: { required: true, type: () => Number }, type: { required: true, enum: require("../enums/trade-type.enum").TradeTypeEnum }, price: { required: true, type: () => Number }, quantity: { required: true, type: () => Number } };
    }
}
exports.TradeDto = TradeDto;
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], TradeDto.prototype, "tradeId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(trade_type_enum_1.TradeTypeEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], TradeDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TradeDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TradeDto.prototype, "quantity", void 0);
//# sourceMappingURL=trade.dto.js.map