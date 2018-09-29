
const mongoose = require('mongoose');
const Mail = mongoose.model('Mail')

const pingHandler = (req, res) => {
    res.send('Healthy')
}

const mailHandler = async (req, res) => {
    let mails, error;

    try {
        mails = await Mail.find();
    } catch (error) {
        error = error;
    }

    res.send({
        message: 'Response from db',
        ms: 'Database Service',
        status: 200,
        payload: mails || error
    })
}

const singleMailHandler = async (req, res) => {
    const id = req.params.id;
    let mail, error;
    try {
        mail = await Mail.findOne({ _id: id })
    } catch (error) {
        error = error;
    }

    res.send({
        message: 'Response from db',
        ms: 'Database Service',
        status: 200,
        payload: mail || error
    })
}
module.exports = server => {
    server
        .get('/', pingHandler)
        .get('/mails', mailHandler)
        .get('/mails/:id', singleMailHandler)
}