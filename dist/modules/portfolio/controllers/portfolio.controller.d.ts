import { PortfolioService } from "../services/portfolio.service";
import { PortfolioDto } from "../dtos/portfolio.dto";
import { SuccessResponse } from "@src/utils/response/interfaces/success-response.interface";
import { PortfolioEntity } from "../entities/portfolio.entity";
export declare class PortfolioController {
    private portfolioService;
    constructor(portfolioService: PortfolioService);
    insertPortfolio(portfolioDto: PortfolioDto): Promise<SuccessResponse<PortfolioEntity>>;
    getPortfolio(): Promise<SuccessResponse<PortfolioEntity[]>>;
    avgBuyingPrice(): Promise<SuccessResponse<Object>>;
}
