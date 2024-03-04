import { SuccessResponse } from "@src/utils/response/interfaces/success-response.interface";
import { TradeEntity } from "../entities/trade.entity";
import { TradeDto } from "../dtos/trade.dto";
import { TradeService } from "../services/trade.service";
export declare class TradeController {
    private tradeService;
    constructor(tradeService: TradeService);
    createTrade(tradeDto: TradeDto): Promise<SuccessResponse<TradeEntity>>;
    updateTrade(tradeId: number, tradeDto: TradeDto): Promise<SuccessResponse<TradeEntity>>;
    deleteTrade(tradeId: number): Promise<string>;
    getAllTrade(): Promise<SuccessResponse<TradeEntity[]>>;
}
