import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { StockEntity } from "./entities/stock.entity";
import { StockService } from "./services/stock.service";
import { StockRepository } from "./repositories/stock.repository";
import { StockController } from "./controllers/stock.controller";

@Module({
    imports: [
        TypeOrmModule.forFeature([
            StockEntity
        ])
    ],
    providers: [
        StockService,
        StockRepository
    ],
    controllers: [StockController],
    exports: [StockRepository]
})
export class StockModule{}