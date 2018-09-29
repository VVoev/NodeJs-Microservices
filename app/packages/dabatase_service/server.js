const server = require('express')();
const bodyParser = require('body-parser');
const { port } = require('./config/index')
const config = require('./config')


server.use(bodyParser.json());

require('./dbUtils')(config);
require('./routes/get')(server);

server.listen(port, () => console.log(`Listening on port ${port}`));