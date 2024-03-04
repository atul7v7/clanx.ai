import { StockService } from "../services/stock.service";
import { SuccessResponse } from "@src/utils/response/interfaces/success-response.interface";
import { StockEntity } from "../entities/stock.entity";
import { StockDto } from "../dtos/stock.dto";
export declare class StockController {
    private stockService;
    constructor(stockService: StockService);
    getAllStocks(): Promise<SuccessResponse<StockEntity[]>>;
    getStockById(stockId: number): Promise<SuccessResponse<StockEntity>>;
    addStock(StockDto: StockDto): Promise<SuccessResponse<StockEntity>>;
}
