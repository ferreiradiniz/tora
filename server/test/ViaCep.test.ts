import ViaCep from "../src/ViaCep";

describe.skip('Testando api ViaCep', () => {
    test('Deve trazer o endereco através do cep', async () => {
        const api = new ViaCep(32371615);
        const end = await api.getEndereco();
        expect(end.logradouro).toBe("Avenida Ápio Cardoso");
        expect(end.complemento).toBe("");
        expect(end.bairro).toBe("Cincão");
        expect(end.cidade).toBe("Contagem");
        expect(end.uf).toBe("MG");
        expect(end.codigoIBGE).toBe("3118601");
        expect(end.ddd).toBe("31");
    });

});



