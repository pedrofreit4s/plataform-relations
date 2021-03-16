import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Office } from 'src/database/models/office.entity';
import { User } from 'src/database/models/user.entity';
import { UserService } from '../services/user.service';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([User, Office])],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
