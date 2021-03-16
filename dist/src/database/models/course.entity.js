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
var Course_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
const typeorm_1 = require("typeorm");
const classe_entity_1 = require("./classe.entity");
const office_entity_1 = require("./office.entity");
let Course = Course_1 = class Course {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Course.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Course.prototype, "name", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Course.prototype, "description", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Course.prototype, "thumbnail", void 0);
__decorate([
    typeorm_1.OneToMany((type) => classe_entity_1.Classe, (course) => Course_1),
    __metadata("design:type", Array)
], Course.prototype, "classes", void 0);
__decorate([
    typeorm_1.OneToOne((type) => office_entity_1.Office, { eager: true }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", office_entity_1.Office)
], Course.prototype, "office", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Course.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Course.prototype, "updatedAt", void 0);
Course = Course_1 = __decorate([
    typeorm_1.Entity('courses')
], Course);
exports.Course = Course;
//# sourceMappingURL=course.entity.js.map