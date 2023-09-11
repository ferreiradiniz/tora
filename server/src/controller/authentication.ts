import express from 'express';
import Login from '../Login';
import { random, authentication } from '../helpers';
import { getErrorMessage } from '../helpers/ErrorMessage';

export const login = async (req: express.Request, resp: express.Response) => {
    try {
        const { username, password } = req.body;
        try {
            const login = new Login(username, password);
            await login.checkLogin();
            const salt = random();
            const user = {
                salt,
                password: authentication(salt, password)
            };
            return resp.status(200).json(user).end();
        } catch (error) {
            // console.log(); //     `Error authentication: ${error}`);
            const message = getErrorMessage(error);
            return resp.status(401).json({ message });
        };
    } catch (error) {
        return resp.status(500).json({ message: 'Internal server error' });
    }
}
