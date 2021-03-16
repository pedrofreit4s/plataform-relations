import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Office } from 'src/database/models/office.entity';
import { User } from 'src/database/models/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  public constructor(
    @InjectRepository(User) public readonly userRepo: Repository<User>,
    @InjectRepository(Office)
    public readonly officeRepo: Repository<Office>
  ) {}
  async findOne(user: User | any): Promise<User | any> {
    return this.userRepo.findOne({
      where: user,
    });
  }
}
