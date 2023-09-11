import express from 'express';
import { getErrorMessage } from '../helpers/ErrorMessage';
import ViaCep from '../ViaCep';

export const viacep = async (req: express.Request, resp: express.Response) => {
    try {
        const { cep } = req.body;
        try {
            const api = new ViaCep(cep);
            const endereco = await api.getEndereco();
            return resp.status(200).json(endereco).end();
        } catch (error) {
            let message = getErrorMessage(error);
            //@ts-ignore
            if (error.response.status === 400)
                message = 'CEP não encontrado';

            // if (message === 'Request failed with status code 400')
            //     message = 'CEP não encontrado';
            return resp.status(400).json({ message });
        };
    } catch (error) {
        return resp.status(500).json({ message: 'Internal server error' });
    }
}
