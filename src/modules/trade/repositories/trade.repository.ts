import { getMysqlDataSource } from "@modules/database/data-source";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "@src/utils/repositories/base-repository";
import { Repository } from "typeorm";
import { TradeEntity } from "../entities/trade.entity";

export class TradeRepository extends BaseRepository<TradeEntity> {
  constructor(
    @InjectRepository(TradeEntity)
    protected repository: Repository<TradeEntity>,
  ) {
    super(repository);
  }
}
