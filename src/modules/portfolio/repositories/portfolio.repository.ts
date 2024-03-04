import { getMysqlDataSource } from "@modules/database/data-source";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseRepository } from "@src/utils/repositories/base-repository";
import { Repository } from "typeorm";
import { PortfolioEntity } from "../entities/portfolio.entity";

export class PortfolioRepository extends BaseRepository<PortfolioEntity> {
  constructor(
    @InjectRepository(PortfolioEntity)
    protected repository: Repository<PortfolioEntity>,
  ) {
    super(repository);
  }
}
