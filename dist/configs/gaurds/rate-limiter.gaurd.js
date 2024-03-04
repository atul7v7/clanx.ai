"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Throttler = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const throttler_1 = require("@nestjs/throttler");
const setup_config_1 = require("../env/setup.config");
class CustomThrottler extends throttler_1.ThrottlerGuard {
    throwThrottlingException() {
        const { RATE_LIMITTER_CONFIG } = (0, setup_config_1.loadConfigFile)();
        throw new throttler_1.ThrottlerException(`Throttler limit ${RATE_LIMITTER_CONFIG.limit} per ${RATE_LIMITTER_CONFIG.ttl} milliseconds`);
    }
}
function setUpThrottler() {
    const { RATE_LIMITTER_CONFIG } = (0, setup_config_1.loadConfigFile)();
    return [
        throttler_1.ThrottlerModule.forRoot([
            {
                ttl: RATE_LIMITTER_CONFIG.ttl,
                limit: RATE_LIMITTER_CONFIG.limit,
            },
        ]),
    ];
}
let Throttler = class Throttler {
};
exports.Throttler = Throttler;
exports.Throttler = Throttler = __decorate([
    (0, common_1.Module)({
        imports: [...setUpThrottler()],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: CustomThrottler,
            },
        ],
    })
], Throttler);
//# sourceMappingURL=rate-limiter.gaurd.js.map