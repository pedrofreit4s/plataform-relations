import { Office } from 'src/database/models/office.entity';
import { User } from 'src/database/models/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    readonly userRepo: Repository<User>;
    readonly officeRepo: Repository<Office>;
    constructor(userRepo: Repository<User>, officeRepo: Repository<Office>);
    findOne(user: User | any): Promise<User | any>;
}
