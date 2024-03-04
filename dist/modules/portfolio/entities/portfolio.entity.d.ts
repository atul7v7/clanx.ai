import { StockEntity } from "@modules/stock/entities/stock.entity";
import { TradeEntity } from "@modules/trade/entities/trade.entity";
export declare class PortfolioEntity {
    id: number;
    trades: TradeEntity;
    stocks: StockEntity;
}
