import { Router } from 'express';
import { createUser, createUsers } from '../services/user';


export const mainRouter = Router();

mainRouter.get('/ping', (req, res) => {
    res.json({ pong: true });
});

mainRouter.get('/test', (req, res) => {
    res.json({ testando: true });
});

mainRouter.post('/user', async (req, res) => {
    const user = await createUser({
        name: 'Billy Bob',
        email: 'billy.bob@example.com'
    });
    if(user)
        res.status(201).json({ user });
});

mainRouter.post('/users', async (req, res) => {
    const result = await createUsers([]);
    res.status(201).json({ ok: true });
});
