"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
const typeorm_1 = require("typeorm");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
exports.databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new typeorm_1.DataSource({
                type: 'mysql',
                host: 'localhost',
                port: 3306,
                username: 'root',
                password: 'root',
                database: 'ads_web_bd',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: true,
                logging: false,
                namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
            });
            return dataSource.initialize();
        },
    },
];
//# sourceMappingURL=database.providers.js.map