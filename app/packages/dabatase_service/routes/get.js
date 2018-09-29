
const mongoose = require('mongoose');
const Mail = mongoose.model('Mail')
module.exports = server => {
    server.get('/', async (_, res) => {
        const m = new Mail({
            subject: 'xaxa',
            receiver: 'xaxa22',
            content: 'qj xui'
        })

        await m.save();

        res.send('Worked');
    })


}