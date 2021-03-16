import { Office } from './office.entity';
export declare class User {
    id: number;
    name: string;
    email: string;
    password: string;
    office: Office;
    createdAt: Date;
    updatedAt: Date;
}
