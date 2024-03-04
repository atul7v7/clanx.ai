"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const stock_entity_1 = require("./entities/stock.entity");
const stock_service_1 = require("./services/stock.service");
const stock_repository_1 = require("./repositories/stock.repository");
const stock_controller_1 = require("./controllers/stock.controller");
let StockModule = class StockModule {
};
exports.StockModule = StockModule;
exports.StockModule = StockModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                stock_entity_1.StockEntity
            ])
        ],
        providers: [
            stock_service_1.StockService,
            stock_repository_1.StockRepository
        ],
        controllers: [stock_controller_1.StockController],
        exports: [stock_repository_1.StockRepository]
    })
], StockModule);
//# sourceMappingURL=stock.module.js.map