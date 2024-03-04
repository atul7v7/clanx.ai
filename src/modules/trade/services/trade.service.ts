import { BadRequestException, Injectable } from "@nestjs/common";
import { TradeEntity } from "../entities/trade.entity";
import { TradeDto } from "../dtos/trade.dto";
import { TradeRepository } from "../repositories/trade.repository";


@Injectable()
export class TradeService{
    constructor(private tradeRepository: TradeRepository){}

    async createTrade(tradeDto: TradeDto): Promise<TradeEntity> {
        const trade = await this.tradeRepository.getRepository().save(tradeDto)
        return trade
    }

    async updateTrade(tradeDto: Partial<TradeDto>): Promise<TradeEntity>{
        const trade = await this.tradeRepository.getRepository().find({ where: { tradeId: tradeDto.tradeId}})
        Object.assign(trade, tradeDto)
        return await this.tradeRepository.getRepository().save(tradeDto)
    }

    async deleteTrade(tradeId: number): Promise<string>{
        const trade = await this.tradeRepository.getRepository().findOne({ where: { tradeId }})
        if(!trade){
            throw new BadRequestException('Invalid Request')
        }
         await this.tradeRepository.getRepository().delete({ tradeId })
         return 'Deleted Successfully'
    }

    async getAllTrades(): Promise<TradeEntity[]> {
        return await this.tradeRepository.getRepository().find()
    }
}