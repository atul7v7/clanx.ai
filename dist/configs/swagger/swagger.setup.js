"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSetup = void 0;
const swagger_1 = require("@nestjs/swagger");
const swagger_document_1 = require("./swagger.document");
const swaggerCustomerOption = {
    customSiteTitle: "clanx.ai Api Docs",
    customfavIcon: "https://clanx.ai.in/wp-content/uploads/2021/02/clanx.ai-Logo_Home-Page-6.png",
};
function swaggerSetup(app) {
    const swaggerDocument = (0, swagger_document_1.createSwaggerDocument)(app);
    swagger_1.SwaggerModule.setup("swagger", app, swaggerDocument, swaggerCustomerOption);
}
exports.swaggerSetup = swaggerSetup;
//# sourceMappingURL=swagger.setup.js.map