import { BaseRepository } from "@src/utils/repositories/base-repository";
import { Repository } from "typeorm";
import { StockEntity } from "../entities/stock.entity";
export declare class StockRepository extends BaseRepository<StockEntity> {
    protected repository: Repository<StockEntity>;
    constructor(repository: Repository<StockEntity>);
}
