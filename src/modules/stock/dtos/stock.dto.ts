import { IsNumber, IsOptional, IsString } from "class-validator"

export class StockDto {
    @IsNumber()
    @IsOptional()
    stockId: number 

    @IsString()
    name: string
}