"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonWebToken = void 0;
const jwt = require("jsonwebtoken");
class JsonWebToken {
    constructor(token = null, payLoad = null) {
        this.token = token;
        this.payLoad = payLoad;
        if (payLoad) {
            this.token = jwt.sign(payLoad, process.env.JWT_SECRET);
        }
        else if (token) {
            this.payLoad = jwt.verify(token, process.env.JWT_SECRET);
        }
    }
}
exports.JsonWebToken = JsonWebToken;
//# sourceMappingURL=jwt.lib.js.map