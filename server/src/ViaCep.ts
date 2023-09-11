import axios from "axios";
import https from 'https';

export type Endereco = {
    logradouro: string,
    complemento: string,
    bairro: string,
    cidade: string,
    uf: string,
    codigoIBGE: number,
    ddd: number
}

export default class ViaCep {
    constructor(readonly cep: number) { };
    //@ts-ignore
    async getEndereco(): Promise<Endereco> {
        const httpsAgent = new https.Agent({
            rejectUnauthorized: false,
        });
        const response = await axios({
            httpsAgent,
            url: `https://viacep.com.br/ws/${this.cep}/json/`,
            method: 'get',
            validateStatus: function (status) {
                return status === 200;
            }
        });
        if (response.status === 200) {
            const data = response.data;
            return {
                logradouro: data.logradouro,
                complemento: data.complemento,
                bairro: data.bairro,
                cidade: data.localidade,
                uf: data.uf,
                codigoIBGE: data.ibge,
                ddd: data.ddd
            };
        }
        else {
            console.log(`CEP inválido - STATUS: ${response.status}`);
        }
    };

};