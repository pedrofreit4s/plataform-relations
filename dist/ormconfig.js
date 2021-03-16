"use strict";
module.exports = {
    host: 'localhost',
    type: 'postgres',
    port: 5432,
    username: 'postgres',
    password: '12345678',
    database: 'plataform',
    entities: ['src/**/**.entity{.ts,.js}'],
    migrations: ['src/database/migrations/*.ts'],
    cli: {
        migrationsDir: 'src/database/migrations',
    },
    synchronize: false,
};
//# sourceMappingURL=ormconfig.js.map