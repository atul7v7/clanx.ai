import { Module } from "@nestjs/common";
import { PortfolioRepository } from "./repositories/portfolio.repository";
import { PortfolioService } from "./services/portfolio.service";
import { PortfolioController } from "./controllers/portfolio.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PortfolioEntity } from "./entities/portfolio.entity";
import { TradeModule } from "@modules/trade/trade.module";
import { StockModule } from "@modules/stock/stock.module";

@Module({
    imports: [
        TypeOrmModule.forFeature([ PortfolioEntity]),
        StockModule,
        TradeModule
    ],
    providers: [
        PortfolioRepository,
        PortfolioService
    ],
    controllers: [
        PortfolioController
    ]
})
export class PortfolioModule{}