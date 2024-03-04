import { IsNumber } from "class-validator";

export class PortfolioDto {
    @IsNumber()
    stockId: number 

    @IsNumber()
    tradeId: number 

    
}