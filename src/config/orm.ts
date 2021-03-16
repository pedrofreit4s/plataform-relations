import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const options: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '12345678',
  database: 'plataform',
  entities: [__dirname + '/../database/models/*'],
  migrations: [__dirname + '/../database/migrations/*'],
  synchronize: false,
};
