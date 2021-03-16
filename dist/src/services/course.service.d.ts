import { Office } from 'src/database/models/office.entity';
import { Course } from 'src/database/models/course.entity';
import { Classe } from 'src/database/models/classe.entity';
import { Repository } from 'typeorm';
export declare class CourseService {
    readonly officeRepo: Repository<Office>;
    readonly courseRepo: Repository<Course>;
    readonly classeRepo: Repository<Classe>;
    constructor(officeRepo: Repository<Office>, courseRepo: Repository<Course>, classeRepo: Repository<Classe>);
}
