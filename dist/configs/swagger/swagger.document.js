"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSwaggerDocument = void 0;
const swagger_1 = require("@nestjs/swagger");
const swagger_config_1 = require("./swagger.config");
const swaggerDocumentOption = {
    operationIdFactory: (controllerKey, methodKey) => methodKey,
};
function createSwaggerDocument(app) {
    return swagger_1.SwaggerModule.createDocument(app, swagger_config_1.swaggerConfig, swaggerDocumentOption);
}
exports.createSwaggerDocument = createSwaggerDocument;
//# sourceMappingURL=swagger.document.js.map