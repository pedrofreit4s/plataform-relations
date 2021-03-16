"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorizationMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt_lib_1 = require("../libs/jwt.lib");
let AuthorizationMiddleware = class AuthorizationMiddleware {
    use(request, response, next) {
        const { authorization } = request.headers;
        const bearer = authorization.split(' ')[1];
        try {
            const { payLoad } = new jwt_lib_1.JsonWebToken(bearer, null);
            request.userId = payLoad.id;
            next();
        }
        catch (error) {
            return response.send(new common_1.ForbiddenException('Token has invalid'));
        }
    }
};
AuthorizationMiddleware = __decorate([
    common_1.Injectable()
], AuthorizationMiddleware);
exports.AuthorizationMiddleware = AuthorizationMiddleware;
//# sourceMappingURL=authorization.middleware.js.map