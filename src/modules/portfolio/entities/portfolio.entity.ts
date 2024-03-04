import { StockEntity } from "@modules/stock/entities/stock.entity";
import { TradeEntity } from "@modules/trade/entities/trade.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class PortfolioEntity{
    @PrimaryGeneratedColumn()
    id: number 

  
    @ManyToOne(() => TradeEntity, (trade) => trade.portfolios)
    trades: TradeEntity 

    @ManyToOne(() => StockEntity, (stock) => stock.stockId) 
    stocks: StockEntity
}