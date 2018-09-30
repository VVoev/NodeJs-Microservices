const mongoose = require('mongoose');
const Mail = mongoose.model('Mail');

const mailHandler = async (req, res) => {
    let mail, error;
    const { subject, receiver, content } = req.body;

    if (!subject || !receiver || !content) {
        res.status(400).send({
            message: 'Your forgot some data',
            service: 'Database Service',
            status: 400,
            payload: 'null'
        })
    }

    const newmail = new Mail({ subject, receiver, content });
    try {
        mail = await newmail.save();
    } catch (error) {
        error = error;
    }

    res.send({
        message: 'Got response from db',
        service: 'Database Service',
        status: 200,
        payload: mail || error
    })

}

module.exports = server => {
    server
        .post('/mails', mailHandler)
}