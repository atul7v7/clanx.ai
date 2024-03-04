import { ObjectLiteral, Repository } from "typeorm";
export declare class BaseRepository<T extends ObjectLiteral> {
    protected baseRepository: Repository<T>;
    constructor(baseRepository: Repository<T>);
    getRepository(): Repository<T>;
    getEntityManager(): import("typeorm").EntityManager;
}
