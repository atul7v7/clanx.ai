"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocationDto = void 0;
const openapi = require("@nestjs/swagger");
class LocationDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { latitude: { required: true, type: () => Number }, longitude: { required: true, type: () => Number } };
    }
}
exports.LocationDto = LocationDto;
//# sourceMappingURL=location.dto.js.map