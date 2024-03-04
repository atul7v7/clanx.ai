import { Body, Controller, Get, Post } from "@nestjs/common";
import { PortfolioService } from "../services/portfolio.service";
import { PortfolioDto } from "../dtos/portfolio.dto";
import { SuccessResponse } from "@src/utils/response/interfaces/success-response.interface";
import { ResponseHandler } from "@src/utils/response/response-handler";
import { PortfolioEntity } from "../entities/portfolio.entity";
import { ApiTags } from "@nestjs/swagger";

@Controller('portfolio')
@ApiTags('Portfolio')
export class PortfolioController {
    constructor(private portfolioService: PortfolioService){}

    @Post()
    async insertPortfolio(@Body() portfolioDto: PortfolioDto): Promise<SuccessResponse<PortfolioEntity>> {
        const portfolio = await this.portfolioService.addPortfolio(portfolioDto)
        return ResponseHandler.success(portfolio)
    }

    @Get()
    async getPortfolio(): Promise<SuccessResponse<PortfolioEntity[]>> {
        const portfolioDetails = await this.portfolioService.getCompletePortfolio()
        return ResponseHandler.success(portfolioDetails)
    }
    @Get('avg')
    async avgBuyingPrice(): Promise<SuccessResponse<Object>>{
        const avgPrice = await this.portfolioService.avgBuyingPrice()
        return ResponseHandler.success(avgPrice)
    }
}