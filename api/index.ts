import express from 'express';
import { hello } from 'random';

const server = express();

server.get('/', (_, res) => {
    const greeting = hello();

    res
        .status(200)
        .send(greeting);
});

server.listen(10000, () => console.log('Server up'));