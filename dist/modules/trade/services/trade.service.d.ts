import { TradeEntity } from "../entities/trade.entity";
import { TradeDto } from "../dtos/trade.dto";
import { TradeRepository } from "../repositories/trade.repository";
export declare class TradeService {
    private tradeRepository;
    constructor(tradeRepository: TradeRepository);
    createTrade(tradeDto: TradeDto): Promise<TradeEntity>;
    updateTrade(tradeDto: Partial<TradeDto>): Promise<TradeEntity>;
    deleteTrade(tradeId: number): Promise<string>;
    getAllTrades(): Promise<TradeEntity[]>;
}
