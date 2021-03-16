"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResponse = void 0;
class createResponse {
    constructor(success = true, props) {
        return Object.assign(Object.assign({}, props), { success });
    }
}
exports.createResponse = createResponse;
//# sourceMappingURL=response.lib.js.map