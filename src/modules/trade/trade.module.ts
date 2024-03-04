import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { StockEntity } from "@modules/stock/entities/stock.entity";
import { StockRepository } from "@modules/stock/repositories/stock.repository";
import { StockController } from "@modules/stock/controllers/stock.controller";
import { TradeRepository } from "./repositories/trade.repository";
import { TradeController } from "./controllers/trade.controller";
import { TradeService } from "./services/trade.service";
import { StockService } from "@modules/stock/services/stock.service";
import { TradeEntity } from "./entities/trade.entity";


@Module({
    imports: [
        TypeOrmModule.forFeature([
            StockEntity,
            TradeEntity
        ])
    ],
    providers: [
        StockService,
        StockRepository,
        TradeRepository,
        TradeService
    ],
    controllers: [
        TradeController
    ],
   exports: [TradeRepository]
})
export class TradeModule{}