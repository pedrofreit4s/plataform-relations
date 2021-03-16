"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseAndClassRelations1615212716020 = void 0;
class CourseAndClassRelations1615212716020 {
    constructor() {
        this.name = 'CourseAndClassRelations1615212716020';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "courses" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "description" character varying NOT NULL, "thumbnail" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "courseId" integer, "officeId" integer, CONSTRAINT "REL_4b6f8161e1c66f5ba824880c14" UNIQUE ("officeId"), CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "classes" ("id" SERIAL NOT NULL, "movie" character varying NOT NULL, "thumbnail" character varying NOT NULL, "attachment" character varying NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_e207aa15404e9b2ce35910f9f7f" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_70d5a4a8bfdf595743eb9f81f82" FOREIGN KEY ("courseId") REFERENCES "classes"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "courses" ADD CONSTRAINT "FK_4b6f8161e1c66f5ba824880c140" FOREIGN KEY ("officeId") REFERENCES "office"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_4b6f8161e1c66f5ba824880c140"`);
        await queryRunner.query(`ALTER TABLE "courses" DROP CONSTRAINT "FK_70d5a4a8bfdf595743eb9f81f82"`);
        await queryRunner.query(`DROP TABLE "classes"`);
        await queryRunner.query(`DROP TABLE "courses"`);
    }
}
exports.CourseAndClassRelations1615212716020 = CourseAndClassRelations1615212716020;
//# sourceMappingURL=1615212716020-CourseAndClassRelations.js.map