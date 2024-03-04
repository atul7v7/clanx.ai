"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerConfig = void 0;
const swagger_1 = require("@nestjs/swagger");
exports.swaggerConfig = new swagger_1.DocumentBuilder()
    .setTitle("clanx.ai Demo App developed by Atul")
    .setDescription("Added functionality as per the docs")
    .setVersion("1.0.0")
    .setContact("Atul singh", 'www.linkedin.com/in/atul7v7', "atul7v7@gmail.com")
    .addTag("Atul")
    .build();
//# sourceMappingURL=swagger.config.js.map