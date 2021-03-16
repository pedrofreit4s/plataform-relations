"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.options = void 0;
exports.options = {
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
//# sourceMappingURL=orm.js.map