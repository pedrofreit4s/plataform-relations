"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficeAndUser1615204929046 = void 0;
class OfficeAndUser1615204929046 {
    constructor() {
        this.name = 'OfficeAndUser1615204929046';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "users"`);
    }
}
exports.OfficeAndUser1615204929046 = OfficeAndUser1615204929046;
//# sourceMappingURL=1615204929046-OfficeAndUser.js.map