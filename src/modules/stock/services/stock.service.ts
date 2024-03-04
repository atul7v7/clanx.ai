import { BadRequestException, Injectable } from "@nestjs/common";
import { StockRepository } from "../repositories/stock.repository";
import { StockEntity } from "../entities/stock.entity";
import { StockDto } from "../dtos/stock.dto";

@Injectable()
export class StockService{
    constructor(private stockRepository: StockRepository){}

    async addStock(stockDto: StockDto): Promise<StockEntity> {
        // Considering stock name to be unique
        const stock = await this.getStockByName(stockDto.name)
        console.log(stock)

        if(stock){
            throw new BadRequestException('Stock Already exists')
        }
        
        return await this.stockRepository.getRepository().save(stockDto)
    }

    async getAllStocks(): Promise<StockEntity[]> {
        return await this.stockRepository.getRepository().find()
    }

    async getStockById(stockId: number): Promise<StockEntity> {
        const stock = this.stockRepository.getRepository().findOne({ where: { stockId }})
        if(!stock){
            throw new BadRequestException('Invalid Request')
        }
        return stock
    }

    async getStockByName(stockName: string): Promise<StockEntity> {
        return await this.stockRepository.getRepository().findOne({ where: { name: stockName }})
    }
}