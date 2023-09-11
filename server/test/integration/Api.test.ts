import axios from "axios";

describe('Teste de API', () => {
    test('Deve trazer o endereco através do CEP', async () => {
        const response = await axios({
            url: 'http://localhost:3000/viacep',
            method: 'post',
            data: {
                cep: 32371615
            }
        });
        const end = response.data;
        expect(end.logradouro).toBe("Avenida Ápio Cardoso");
        expect(end.complemento).toBe("");
        expect(end.bairro).toBe("Cincão");
        expect(end.cidade).toBe("Contagem");
        expect(end.uf).toBe("MG");
        expect(end.codigoIBGE).toBe("3118601");
        expect(end.ddd).toBe("31");

    });

    test('Deve levantar excecao para CEP inválido', async () => {
        let retorno: string = '';
        try {
            //@ts-ignore
            const response = await axios({
                url: 'http://localhost:3000/viacep',
                method: 'post',
                data: {
                    cep: 123123
                }
            });

        } catch (error) {
            //@ts-ignore
            const { message } = error.response.data;
            retorno = message;
        }
        expect(retorno).toBe('CEP não encontrado');

    });
});