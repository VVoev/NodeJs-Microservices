const amqp = require('amqplib/callback_api');
const { q: { uri } } = require('../config/dev');

const q = 'test_q';
amqp.connect(uri, (err, connection) => {
    if (err) throw new Error(err);

    connection.createChannel((err, ch) => {
        if (err) throw new Error(err);

        ch.assertQueue(q, { durable: true });
        ch.consume(q, msg => {
            console.log('I got a msg', msg.content.toString());
        }, { noAck: true })
    })
})