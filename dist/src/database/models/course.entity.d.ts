import { Classe } from './classe.entity';
import { Office } from './office.entity';
export declare class Course {
    id: number;
    name: string;
    description: string;
    thumbnail: string;
    classes: Classe[];
    office: Office;
    createdAt: Date;
    updatedAt: Date;
}
