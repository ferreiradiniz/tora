import express from 'express';

import { viacep } from '../controller/ViaCep';

export default (router: express.Router) => {
    router.post('/viacep', viacep);
};