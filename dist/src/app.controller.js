"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const response_lib_1 = require("./libs/response.lib");
const course_service_1 = require("./services/course.service");
const user_service_1 = require("./services/user.service");
let AppController = class AppController {
    constructor(userService, courseService) {
        this.userService = userService;
        this.courseService = courseService;
    }
    async getHello() {
        const user = await this.userService.userRepo.findOne({ where: { id: 1 } });
        return await this.userService.findOne(Object.assign({}, user));
    }
    async getCourses() {
        return new response_lib_1.createResponse(true, {
            course: await this.courseService.courseRepo.findOne({ where: { id: 1 } }),
            classes: await this.courseService.classeRepo.find({
                where: { course: { id: 1 } },
            }),
        });
    }
};
__decorate([
    common_1.Get('/hello'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getHello", null);
__decorate([
    common_1.Get('/hello2'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getCourses", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        course_service_1.CourseService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map