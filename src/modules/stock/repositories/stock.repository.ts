import { getMysqlDataSource } from "@modules/database/data-source";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "@src/utils/repositories/base-repository";
import { Repository } from "typeorm";
import { StockEntity } from "../entities/stock.entity";

export class StockRepository extends BaseRepository<StockEntity> {
  constructor(
    @InjectRepository(StockEntity)
    protected repository: Repository<StockEntity>,
  ) {
    super(repository);
  }
}
