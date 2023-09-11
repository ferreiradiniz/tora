import express from 'express';
import authentication from './authentication';
import viaCep from './ViaCep';

const router = express.Router();
export default (): express.Router => {
    authentication(router);
    viaCep(router);
    return router;
};