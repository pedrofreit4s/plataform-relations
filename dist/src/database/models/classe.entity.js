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
var Classe_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Classe = void 0;
const typeorm_1 = require("typeorm");
const course_entity_1 = require("./course.entity");
let Classe = Classe_1 = class Classe {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Classe.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Classe.prototype, "movie", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Classe.prototype, "thumbnail", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Classe.prototype, "attachment", void 0);
__decorate([
    typeorm_1.ManyToOne((type) => course_entity_1.Course, (classes) => Classe_1, { eager: true }),
    __metadata("design:type", course_entity_1.Course)
], Classe.prototype, "course", void 0);
__decorate([
    typeorm_1.CreateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Classe.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.UpdateDateColumn({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Classe.prototype, "updatedAt", void 0);
Classe = Classe_1 = __decorate([
    typeorm_1.Entity('classes')
], Classe);
exports.Classe = Classe;
//# sourceMappingURL=classe.entity.js.map