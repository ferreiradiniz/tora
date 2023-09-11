import { Knex } from "knex";


const configPostgres: Knex.Config = {
    client: 'pg',
    connection: 'postgres://postgres:root@localhost:5432/app',
    searchPath: ['knex', 'public'],
};

export default { configPostgres };