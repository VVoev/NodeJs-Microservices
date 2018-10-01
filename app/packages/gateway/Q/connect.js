const amqp = require('amqplib/callback_api');

const q = 'test_q';
let channel;

amqp.connect('amqp://iiazuqea:E57QvFIMwN1AFcr504vRbGXszYXBFIHg@raven.rmq.cloudamqp.com/iiazuqea', (err, connection) => {
    if (err) throw new Error(err);

    connection.createChannel((err, ch) => {
        if (err) throw new Error(err);

        ch.assertQueue(q, { durable: true });

        channel = ch;
    })



})

const pushToQ = (msg) => {
    if (!channel) setTimeout(pushToQ(msg), 1000);

    channel.sendToQueue(q, Buffer.from(msg));
    return { m: 'done' }
}

module.exports = {
    pushToQ
}