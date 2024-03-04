import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { SuccessResponse } from "@src/utils/response/interfaces/success-response.interface";

import { ResponseHandler } from "@src/utils/response/response-handler";

import { ApiOperation, ApiTags } from "@nestjs/swagger";
import { TradeEntity } from "../entities/trade.entity";
import { TradeDto } from "../dtos/trade.dto";
import { TradeService } from "../services/trade.service";

@Controller('trades')
@ApiTags('Trades')
export class TradeController {
    constructor(private tradeService: TradeService){}
      @Post()
      async createTrade(
       @Body() tradeDto: TradeDto
      ): Promise<SuccessResponse<TradeEntity>> {
        const stock = await this.tradeService.createTrade(tradeDto);
        return ResponseHandler.success(stock);
      }

      @Patch()
      async updateTrade(
        @Param('tradeId') tradeId: number,
        @Body() tradeDto: TradeDto
      ): Promise<SuccessResponse<TradeEntity>> {
        const updatedTrade = await this.tradeService.updateTrade(tradeDto)
        return ResponseHandler.success(updatedTrade)
      }

      @Delete(':tradeId')
      async deleteTrade(
        @Param('tradeId') tradeId: number
      ): Promise<string> {
        const deletedRecord = await this.tradeService.deleteTrade(tradeId)
       return deletedRecord
      }

      @Get()
      async getAllTrade(): Promise<SuccessResponse<TradeEntity[]>> {
        const trades = await this.tradeService.getAllTrades()
        return ResponseHandler.success(trades)
      }
}