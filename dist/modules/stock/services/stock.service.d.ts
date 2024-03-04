import { StockRepository } from "../repositories/stock.repository";
import { StockEntity } from "../entities/stock.entity";
import { StockDto } from "../dtos/stock.dto";
export declare class StockService {
    private stockRepository;
    constructor(stockRepository: StockRepository);
    addStock(stockDto: StockDto): Promise<StockEntity>;
    getAllStocks(): Promise<StockEntity[]>;
    getStockById(stockId: number): Promise<StockEntity>;
    getStockByName(stockName: string): Promise<StockEntity>;
}
