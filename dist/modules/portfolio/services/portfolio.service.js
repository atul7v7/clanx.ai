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
exports.PortfolioService = void 0;
const common_1 = require("@nestjs/common");
const portfolio_repository_1 = require("../repositories/portfolio.repository");
const portfolio_entity_1 = require("../entities/portfolio.entity");
const trade_repository_1 = require("../../trade/repositories/trade.repository");
const stock_repository_1 = require("../../stock/repositories/stock.repository");
const trade_type_enum_1 = require("../../trade/enums/trade-type.enum");
let PortfolioService = class PortfolioService {
    constructor(portfolioRepository, stockRepository, tradeRepository) {
        this.portfolioRepository = portfolioRepository;
        this.stockRepository = stockRepository;
        this.tradeRepository = tradeRepository;
    }
    async addPortfolio(portfolioDto) {
        const trade = await this.tradeRepository.getRepository().findOne({ where: { tradeId: portfolioDto.tradeId } });
        const stock = await this.stockRepository.getRepository().findOne({ where: { stockId: portfolioDto.stockId } });
        if (!(trade && stock)) {
            throw new common_1.HttpException('SOmething went wrong, please check stock and trade ', 500);
        }
        const portfolioEntityDto = new portfolio_entity_1.PortfolioEntity();
        portfolioEntityDto.stocks = stock;
        portfolioEntityDto.trades = trade;
        return await this.portfolioRepository.getRepository().save(portfolioEntityDto);
    }
    async getCompletePortfolio() {
        const portfolio = await this.portfolioRepository.getRepository().find({
            relations: ['trades', 'stocks']
        });
        return portfolio;
    }
    async avgBuyingPrice() {
        const portfolio = await this.portfolioRepository.getRepository().find({ relations: ['trades', 'stocks'] });
        const buyPortfolio = portfolio.filter(portfolio => portfolio.trades.type = trade_type_enum_1.TradeTypeEnum.BUY);
        let obj = {};
        buyPortfolio.forEach(portfolio => {
            if (obj[portfolio.stocks.stockId]) {
                obj[portfolio.stocks.stockId].priceSum = obj[portfolio.stocks.stockId].priceSum + (portfolio.trades.price * portfolio.trades.quantity);
                obj[portfolio.stocks.stockId].quantity = obj[portfolio.stocks.stockId].quantity + portfolio.trades.quantity;
            }
            else {
                obj[portfolio.stocks.stockId] = {
                    priceSum: (portfolio.trades.price * portfolio.trades.quantity),
                    quantity: portfolio.trades.quantity
                };
            }
        });
        const avgStockPrice = {};
        Object.entries(obj).map(([stockId, details]) => {
            const avgPrice = details.priceSum / details.quantity;
            avgStockPrice[stockId] = avgPrice;
        });
        return avgStockPrice;
    }
};
exports.PortfolioService = PortfolioService;
exports.PortfolioService = PortfolioService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [portfolio_repository_1.PortfolioRepository,
        stock_repository_1.StockRepository,
        trade_repository_1.TradeRepository])
], PortfolioService);
//# sourceMappingURL=portfolio.service.js.map