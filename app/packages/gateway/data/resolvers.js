const axios = require('axios');
const { serviceDatabase: { port } } = require('../config')

const { pushToQ } = require('../Q/connect')

const hostname = `http://localhost` || process.env.hostname;
const databaseUrl = `${hostname}:${port}`

const get = async path => (await axios.get(`${databaseUrl}/${path}`)).data.payload;
const post = async (path, body) => (await axios.post(`${databaseUrl}/${path}`, { ...body })).data.payload;


module.exports = {
    Query: {
        mails: () => get('mails'),
        mail: (_, { id }) => get(`mails/${id}`)
    },
    Mutation: {
        mail: (_, args) => {
            let result, error;

            try {
                result = post('mails', args)
            } catch (error) {
                error = error;
            }

            pushToQ(JSON.stringify(args));
            return result || error;
        }
    }
};