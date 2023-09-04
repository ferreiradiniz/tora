import express from 'express';
import Login from '../Login';
import { random, authentication } from '../helpers';

export const login = async (req: express.Request, resp: express.Response, next: express.NextFunction) => {
    try {


        const { username, password } = req.body;
        try {
            new Login(username, password);
            const salt = random();
            const user = {
                salt,
                password: authentication(salt, password)
            }
            return resp.status(200).json(user).end();
        } catch (error) {
            return resp.sendStatus(400);
        };
    } catch (error) {
        console.log(error);
        return resp.sendStatus(400);
    }
}
