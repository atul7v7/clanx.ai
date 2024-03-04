import { PortfolioEntity } from "@modules/portfolio/entities/portfolio.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('stocks')
export class StockEntity{
    @PrimaryGeneratedColumn()
    stockId: number

    @Column()
    name: string

}