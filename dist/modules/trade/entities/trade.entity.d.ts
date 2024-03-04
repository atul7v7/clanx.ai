import { TradeTypeEnum } from "../enums/trade-type.enum";
import { PortfolioEntity } from "@modules/portfolio/entities/portfolio.entity";
export declare class TradeEntity {
    tradeId: number;
    type: TradeTypeEnum;
    price: number;
    quantity: number;
    createdAt: Date;
    updatedAt: Date;
    portfolios: PortfolioEntity[];
}
