import { IsEnum, IsNumber, IsOptional, IsString } from "class-validator"
import { TradeTypeEnum } from "../enums/trade-type.enum"

export class TradeDto {
    @IsNumber()
    @IsOptional()
    tradeId: number 

    @IsEnum(TradeTypeEnum)
    @IsOptional()
    type: TradeTypeEnum

    @IsNumber()
    price: number

    @IsNumber()
    quantity: number

    
}