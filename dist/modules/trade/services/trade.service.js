"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TradeService = void 0;
const common_1 = require("@nestjs/common");
const trade_repository_1 = require("../repositories/trade.repository");
let TradeService = class TradeService {
    constructor(tradeRepository) {
        this.tradeRepository = tradeRepository;
    }
    async createTrade(tradeDto) {
        const trade = await this.tradeRepository.getRepository().save(tradeDto);
        return trade;
    }
    async updateTrade(tradeDto) {
        const trade = await this.tradeRepository.getRepository().find({ where: { tradeId: tradeDto.tradeId } });
        Object.assign(trade, tradeDto);
        return await this.tradeRepository.getRepository().save(tradeDto);
    }
    async deleteTrade(tradeId) {
        const trade = await this.tradeRepository.getRepository().findOne({ where: { tradeId } });
        if (!trade) {
            throw new common_1.BadRequestException('Invalid Request');
        }
        await this.tradeRepository.getRepository().delete({ tradeId });
        return 'Deleted Successfully';
    }
    async getAllTrades() {
        return await this.tradeRepository.getRepository().find();
    }
};
exports.TradeService = TradeService;
exports.TradeService = TradeService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [trade_repository_1.TradeRepository])
], TradeService);
//# sourceMappingURL=trade.service.js.map