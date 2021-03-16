import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Office } from 'src/database/models/office.entity';
import { Course } from 'src/database/models/course.entity';
import { CourseService } from '../services/course.service';
import { Classe } from 'src/database/models/classe.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Course, Classe, Office])],
  providers: [CourseService],
  exports: [CourseService],
})
export class CourseModule {}
