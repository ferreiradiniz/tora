import kanexfile from './dao/knexfile';
import knex from 'knex';
import { getErrorMessage } from './helpers/ErrorMessage';

export default class Login {
    constructor(readonly login: string, readonly password: string) {
        if (login === '' || password === '') throw new Error('Login e senha inválido');
    };

    async checkLogin(): Promise<void> {
        const postgres = knex(kanexfile.configPostgres);
        try {
            const response = await postgres.withSchema('bruno')
                .select('id_login').from('login')
                .where('username', this.login)
                .andWhere('password', this.password);
            if (!response.length) {
                postgres.destroy();
                throw new Error('Login e senha inválido!');
            };
            postgres.destroy();

        } catch (error) {
            postgres.destroy();
            throw new Error(getErrorMessage(error));
        };
    };
};