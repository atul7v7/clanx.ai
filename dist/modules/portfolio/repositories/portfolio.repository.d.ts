import { BaseRepository } from "@src/utils/repositories/base-repository";
import { Repository } from "typeorm";
import { PortfolioEntity } from "../entities/portfolio.entity";
export declare class PortfolioRepository extends BaseRepository<PortfolioEntity> {
    protected repository: Repository<PortfolioEntity>;
    constructor(repository: Repository<PortfolioEntity>);
}
