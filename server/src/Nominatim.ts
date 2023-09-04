import axios from "axios";

export default class Nominatim {
    pais?: string;

    constructor(readonly logradouro: String, readonly numero: string, readonly bairro: string, readonly cidade: string, readonly estado: string, pais?: string) {
        this.pais = pais || 'brasil';
        if (logradouro === '') throw 'Logradouro é obrigatório';
        if (numero === '') throw 'Número é obrigatório';
        if (bairro === '') throw 'Bairro é obrigatório';
        if (cidade === '') throw 'Cidade é obrigatório';
        if (estado === '') throw 'Estado é obrigatório';
    };

    async getLatitudeLongitude(): Promise<{ latitude: number, longitude: number, message: string }> {
        const response = await axios({
            url: `https://nominatim.openstreetmap.org/search?street=${this.numero} ${this.logradouro}&city=${this.cidade}&county=${this.bairro}&state=${this.estado}&country=${this.pais}&format=json&addressdetails=1&limit=1&polygon_svg=1`,
            method: 'get'
        })
        if (response.data.length === 0) {
            return {
                latitude: 0,
                longitude: 0,
                message: 'Endereço não encontrado'
            }
        } else {
            const { lat, lon } = response.data[0];
            return {
                latitude: lat,
                longitude: lon,
                message: 'Endereco encontrado'
            }
        }
    }
}