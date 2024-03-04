"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResponseHandler = void 0;
class ResponseHandler {
    static success(data, pagerOptions) {
        return {
            data,
            pagerOptions,
        };
    }
    static error(message, data = undefined) {
        return {
            message,
            data,
        };
    }
}
exports.ResponseHandler = ResponseHandler;
//# sourceMappingURL=response-handler.js.map