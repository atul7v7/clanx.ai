import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { StockService } from "../services/stock.service";
import { SuccessResponse } from "@src/utils/response/interfaces/success-response.interface";
import { StockEntity } from "../entities/stock.entity";
import { ResponseHandler } from "@src/utils/response/response-handler";
import { StockDto } from "../dtos/stock.dto";
import { ApiOperation, ApiTags } from "@nestjs/swagger";

@Controller('stocks')
@ApiTags('Stocks')
export class StockController {
    constructor(private stockService: StockService){}

    @Get()
    async getAllStocks(): Promise<SuccessResponse<StockEntity[]>> {
        const stocks = await this.stockService.getAllStocks();
        return ResponseHandler.success(stocks);
      }

      @Get(':stockId')
      async getStockById(
        @Param('stockId') stockId: number
      ): Promise<SuccessResponse<StockEntity>> {
          const stocks = await this.stockService.getStockById(stockId);
          return ResponseHandler.success(stocks);
        }

      @Post()
      @ApiOperation({ description: 'No duplicate Stock name is allowed'})
      async addStock(
       @Body() StockDto: StockDto
      ): Promise<SuccessResponse<StockEntity>> {
        const stock = await this.stockService.addStock(StockDto);
        return ResponseHandler.success(stock);
      }
}