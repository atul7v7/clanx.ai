import { HttpException, Injectable } from "@nestjs/common";
import { PortfolioRepository } from "../repositories/portfolio.repository";
import { PortfolioDto } from "../dtos/portfolio.dto";
import { PortfolioEntity } from "../entities/portfolio.entity";
import { TradeRepository } from "@modules/trade/repositories/trade.repository";
import { StockRepository } from "@modules/stock/repositories/stock.repository";
import { TradeService } from "@modules/trade/services/trade.service";
import { TradeTypeEnum } from "@modules/trade/enums/trade-type.enum";

@Injectable()
export class PortfolioService {
    constructor(
        private portfolioRepository: PortfolioRepository,  
        private stockRepository: StockRepository,
        private tradeRepository: TradeRepository,
       
        ){}

    async addPortfolio(portfolioDto: PortfolioDto): Promise<PortfolioEntity> {
        const trade = await this.tradeRepository.getRepository().findOne({ where: { tradeId: portfolioDto.tradeId}})
        const stock = await this.stockRepository.getRepository().findOne({ where: {stockId: portfolioDto.stockId}})
        if(!(trade && stock)){
            throw new HttpException('SOmething went wrong, please check stock and trade ', 500)
        }
        const portfolioEntityDto = new PortfolioEntity()
        portfolioEntityDto.stocks = stock
        portfolioEntityDto.trades = trade
        return await this.portfolioRepository.getRepository().save(portfolioEntityDto)
    }

    async getCompletePortfolio(): Promise<PortfolioEntity[]> {
        const portfolio = await this.portfolioRepository.getRepository().find({ 
            relations: ['trades', 'stocks']
        })
        return portfolio
    }

    async avgBuyingPrice(): Promise<Object>{
        const portfolio = await this.portfolioRepository.getRepository().find({  relations: ['trades', 'stocks']})
        const buyPortfolio = portfolio.filter(portfolio => portfolio.trades.type = TradeTypeEnum.BUY)
        let obj: {
            [key in string]: {
                priceSum: number,
                quantity: number
            }
        } = {} 

        buyPortfolio.forEach(portfolio => {
            if(obj[portfolio.stocks.stockId]){
                obj[portfolio.stocks.stockId].priceSum = obj[portfolio.stocks.stockId].priceSum + (portfolio.trades.price * portfolio.trades.quantity)
                obj[portfolio.stocks.stockId].quantity = obj[portfolio.stocks.stockId].quantity + portfolio.trades.quantity
            }else{
                obj[portfolio.stocks.stockId] = {
                    priceSum:  (portfolio.trades.price * portfolio.trades.quantity),
                    quantity: portfolio.trades.quantity
                }
            }
        })

        const avgStockPrice: {
            [key in number]: number
        } = {}


        Object.entries(obj).map(([stockId, details]) => {
            const avgPrice = details.priceSum / details.quantity 
            avgStockPrice[stockId] = avgPrice
        })

        return avgStockPrice
       
    }
}