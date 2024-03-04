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
exports.StockController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const stock_service_1 = require("../services/stock.service");
const response_handler_1 = require("../../../utils/response/response-handler");
const stock_dto_1 = require("../dtos/stock.dto");
const swagger_1 = require("@nestjs/swagger");
let StockController = class StockController {
    constructor(stockService) {
        this.stockService = stockService;
    }
    async getAllStocks() {
        const stocks = await this.stockService.getAllStocks();
        return response_handler_1.ResponseHandler.success(stocks);
    }
    async getStockById(stockId) {
        const stocks = await this.stockService.getStockById(stockId);
        return response_handler_1.ResponseHandler.success(stocks);
    }
    async addStock(StockDto) {
        const stock = await this.stockService.addStock(StockDto);
        return response_handler_1.ResponseHandler.success(stock);
    }
};
exports.StockController = StockController;
__decorate([
    (0, common_1.Get)(),
    openapi.ApiResponse({ status: 200 }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getAllStocks", null);
__decorate([
    (0, common_1.Get)(':stockId'),
    openapi.ApiResponse({ status: 200 }),
    __param(0, (0, common_1.Param)('stockId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "getStockById", null);
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ description: 'No duplicate Stock name is allowed' }),
    openapi.ApiResponse({ status: 201 }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [stock_dto_1.StockDto]),
    __metadata("design:returntype", Promise)
], StockController.prototype, "addStock", null);
exports.StockController = StockController = __decorate([
    (0, common_1.Controller)('stocks'),
    (0, swagger_1.ApiTags)('Stocks'),
    __metadata("design:paramtypes", [stock_service_1.StockService])
], StockController);
//# sourceMappingURL=stock.controller.js.map