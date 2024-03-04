import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { TradeTypeEnum } from "../enums/trade-type.enum";
import { PortfolioEntity } from "@modules/portfolio/entities/portfolio.entity";

@Entity('trades')
export class TradeEntity{
    @PrimaryGeneratedColumn()
    tradeId: number

    @Column()
    type: TradeTypeEnum

    @Column()
    price: number

    @Column()
    quantity: number

    @CreateDateColumn({
        type: 'datetime',
        name: 'createdAt',
        default: () => 'CURRENT_TIMESTAMP(2)',
        precision: 2,
      })
      createdAt: Date;
    
      @UpdateDateColumn({
        type: 'datetime',
        name: 'updatedAt',
        default: () => 'CURRENT_TIMESTAMP(2)',
        precision: 2,
        onUpdate: 'CURRENT_TIMESTAMP(2)',
      })
      updatedAt: Date;

      @OneToMany( () => PortfolioEntity, (portfolio) => portfolio.trades)
      portfolios: PortfolioEntity[]
}