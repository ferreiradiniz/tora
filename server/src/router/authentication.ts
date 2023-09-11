import express from 'express';

import { login } from '../controller/authentication';

export default (router: express.Router) => {
    router.post('/login', login);
};

