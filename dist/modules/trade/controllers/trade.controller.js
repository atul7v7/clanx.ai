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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const response_handler_1 = require("../../../utils/response/response-handler");
const swagger_1 = require("@nestjs/swagger");
const trade_dto_1 = require("../dtos/trade.dto");
const trade_service_1 = require("../services/trade.service");
let TradeController = class TradeController {
    constructor(tradeService) {
        this.tradeService = tradeService;
    }
    async createTrade(tradeDto) {
        const stock = await this.tradeService.createTrade(tradeDto);
        return response_handler_1.ResponseHandler.success(stock);
    }
    async updateTrade(tradeId, tradeDto) {
        const updatedTrade = await this.tradeService.updateTrade(tradeDto);
        return response_handler_1.ResponseHandler.success(updatedTrade);
    }
    async deleteTrade(tradeId) {
        const deletedRecord = await this.tradeService.deleteTrade(tradeId);
        return deletedRecord;
    }
    async getAllTrade() {
        const trades = await this.tradeService.getAllTrades();
        return response_handler_1.ResponseHandler.success(trades);
    }
};
exports.TradeController = TradeController;
__decorate([
    (0, common_1.Post)(),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [trade_dto_1.TradeDto]),
    __metadata("design:returntype", Promise)
], TradeController.prototype, "createTrade", null);
__decorate([
    (0, common_1.Patch)(),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('tradeId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, trade_dto_1.TradeDto]),
    __metadata("design:returntype", Promise)
], TradeController.prototype, "updateTrade", null);
__decorate([
    (0, common_1.Delete)(':tradeId'),
    openapi.ApiResponse({ status: 200, type: String }),
    __param(0, (0, common_1.Param)('tradeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], TradeController.prototype, "deleteTrade", null);
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TradeController.prototype, "getAllTrade", null);
exports.TradeController = TradeController = __decorate([
    (0, common_1.Controller)('trades'),
    (0, swagger_1.ApiTags)('Trades'),
    __metadata("design:paramtypes", [trade_service_1.TradeService])
], TradeController);
//# sourceMappingURL=trade.controller.js.map