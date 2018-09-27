const server = require('express')();
const port = 3000;
const { databaseFunction } = require('./db');

server.get('/', (req, res) => {
    res.send(databaseFunction());
})
server.get('/diff', (req, res) => {
    res.send('different route')
})

server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});

