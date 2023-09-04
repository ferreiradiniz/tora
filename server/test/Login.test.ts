import Login from "../src/Login";

describe('Teste de login', () => {

    test('Login inválido', () => {
        expect(() => new Login('brunoiz', 'abc123')).toThrowError('Login e senha inválido');
    });
});