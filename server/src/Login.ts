export default class Login {
    constructor(readonly login: string, readonly password: string) {

        if (login !== 'bruno.diniz' || password !== 'abc123') throw new Error('Login e senha inválido');
    };
}