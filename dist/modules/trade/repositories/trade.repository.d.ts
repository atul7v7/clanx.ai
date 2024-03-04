import { BaseRepository } from "@src/utils/repositories/base-repository";
import { Repository } from "typeorm";
import { TradeEntity } from "../entities/trade.entity";
export declare class TradeRepository extends BaseRepository<TradeEntity> {
    protected repository: Repository<TradeEntity>;
    constructor(repository: Repository<TradeEntity>);
}
