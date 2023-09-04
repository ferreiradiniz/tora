import Nominatim from "../src/Nominatim";


describe.skip('Teste comunicação com Api Nominatim', () => {

    test('Logradrouro é obrigatório', async () => {
        expect(() => new Nominatim('', '22', 'cincao', 'contagem', 'minas gerais')).toThrowError('Logradouro é obrigatório');
    });

    test('Número é obrigatório', async () => {
        expect(() => new Nominatim('avenida ápio cardoso', '', 'cincao', 'contagem', 'minas gerais')).toThrowError('Número é obrigatório');
    });

    test('Bairro é obrigatório', async () => {
        expect(() => new Nominatim('avenida ápio cardoso', '22', '', 'contagem', 'minas gerais')).toThrowError('Bairro é obrigatório');
    });

    test('Cidade é obrigatório', async () => {
        expect(() => new Nominatim('avenida ápio cardoso', '22', 'cincao', '', 'minas gerais')).toThrowError('Cidade é obrigatório');
    });

    test('Estado é obrigatório', async () => {
        expect(() => new Nominatim('avenida ápio cardoso', '22', 'cincao', 'contagem', '')).toThrowError('Estado é obrigatório');
    });

    test("Deve retornar a latitude e longitude baseado no endereco", async () => {
        const api = new Nominatim('avenida ápio cardoso', '22', 'cincao', 'contagem', 'minas gerais');
        // const api = new Nominatim('avenida ápio cardoso', '22', 'cincao', 'contagem', 'minas gerais', 'brasil');
        const { latitude, longitude, message } = await api.getLatitudeLongitude();
        expect(latitude).toBe('-19.9193857');
        expect(longitude).toBe('-44.0484235');
        expect(message).toBe('Endereco encontrado');
    });


    test('Deve retornar "Endereço não encontrado" para endereço errado', async () => {
        const api = new Nominatim('avenida ápio cardoso', '22', 'cincao', 'coasdfasdfntagem', 'minas gerais', 'brasil');
        // expect(async () => await api.getLatitudeLongitude()).toThrowError('Endereço não encontrado');
        const { latitude, longitude, message } = await api.getLatitudeLongitude();
        expect(latitude).toBe(0);
        expect(longitude).toBe(0);
        expect(message).toBe('Endereço não encontrado');
    });

})



