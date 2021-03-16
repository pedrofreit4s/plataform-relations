import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Office } from 'src/database/models/office.entity';
import { Course } from 'src/database/models/course.entity';
import { Classe } from 'src/database/models/classe.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CourseService {
  public constructor(
    @InjectRepository(Office) public readonly officeRepo: Repository<Office>,
    @InjectRepository(Course) public readonly courseRepo: Repository<Course>,
    @InjectRepository(Classe) public readonly classeRepo: Repository<Classe>
  ) {}
}
