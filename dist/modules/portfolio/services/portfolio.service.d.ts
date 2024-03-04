import { PortfolioRepository } from "../repositories/portfolio.repository";
import { PortfolioDto } from "../dtos/portfolio.dto";
import { PortfolioEntity } from "../entities/portfolio.entity";
import { TradeRepository } from "@modules/trade/repositories/trade.repository";
import { StockRepository } from "@modules/stock/repositories/stock.repository";
export declare class PortfolioService {
    private portfolioRepository;
    private stockRepository;
    private tradeRepository;
    constructor(portfolioRepository: PortfolioRepository, stockRepository: StockRepository, tradeRepository: TradeRepository);
    addPortfolio(portfolioDto: PortfolioDto): Promise<PortfolioEntity>;
    getCompletePortfolio(): Promise<PortfolioEntity[]>;
    avgBuyingPrice(): Promise<Object>;
}
