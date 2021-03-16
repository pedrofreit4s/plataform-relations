"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OfficeAndUser1615205300774 = void 0;
class OfficeAndUser1615205300774 {
    constructor() {
        this.name = 'OfficeAndUser1615205300774';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "office" ("id" SERIAL NOT NULL, "office" character varying NOT NULL, "fullAcess" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_200185316ba169fda17e3b6ba00" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "officeId" integer, CONSTRAINT "REL_f7f69295d570c80f210703300f" UNIQUE ("officeId"), CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "users" ADD CONSTRAINT "FK_f7f69295d570c80f210703300f1" FOREIGN KEY ("officeId") REFERENCES "office"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "users" DROP CONSTRAINT "FK_f7f69295d570c80f210703300f1"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "office"`);
    }
}
exports.OfficeAndUser1615205300774 = OfficeAndUser1615205300774;
//# sourceMappingURL=1615205300774-OfficeAndUser.js.map