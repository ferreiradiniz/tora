import Login from "../src/Login";

describe.skip('Teste de login', () => {

    test('Usernam e password vazio', () => {
        expect(() => new Login('', '')).toThrowError('Login e senha inválido');
        expect(() => new Login('asdfasas', '')).toThrowError('Login e senha inválido');
        expect(() => new Login('', 'asfasdf')).toThrowError('Login e senha inválido');
    });

    test('Username e password inválidos', () => {
        const login = new Login('asdfa', '1231');
        expect(async () => await login.checkLogin()).toThrowError('Login e senha inválido');
    })

});