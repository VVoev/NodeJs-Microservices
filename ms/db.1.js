const server = require('express')();

server.get('/db', (req, res) => {
    const data = [{ title: 'title baxur', content: 'content a' }]
    res.send(data);
});

server.listen(4000, () => {
    console.log('DB connector on port:4000');
})

