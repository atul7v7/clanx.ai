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
exports.StockService = void 0;
const common_1 = require("@nestjs/common");
const stock_repository_1 = require("../repositories/stock.repository");
let StockService = class StockService {
    constructor(stockRepository) {
        this.stockRepository = stockRepository;
    }
    async addStock(stockDto) {
        const stock = await this.getStockByName(stockDto.name);
        console.log(stock);
        if (stock) {
            throw new common_1.BadRequestException('Stock Already exists');
        }
        return await this.stockRepository.getRepository().save(stockDto);
    }
    async getAllStocks() {
        return await this.stockRepository.getRepository().find();
    }
    async getStockById(stockId) {
        const stock = this.stockRepository.getRepository().findOne({ where: { stockId } });
        if (!stock) {
            throw new common_1.BadRequestException('Invalid Request');
        }
        return stock;
    }
    async getStockByName(stockName) {
        return await this.stockRepository.getRepository().findOne({ where: { name: stockName } });
    }
};
exports.StockService = StockService;
exports.StockService = StockService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [stock_repository_1.StockRepository])
], StockService);
//# sourceMappingURL=stock.service.js.map