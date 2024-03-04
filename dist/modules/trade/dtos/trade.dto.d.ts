import { TradeTypeEnum } from "../enums/trade-type.enum";
export declare class TradeDto {
    tradeId: number;
    type: TradeTypeEnum;
    price: number;
    quantity: number;
}
