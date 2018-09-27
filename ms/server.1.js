const server = require('express')();
const axios = require('axios');
const port = 3000;

server.get('/', async (req, res) => {
    const result = await axios.get('http://localhost:4000/db');
    res.send(result.data);
})
server.get('/diff', (req, res) => {
    res.send('different route')
})

server.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
});