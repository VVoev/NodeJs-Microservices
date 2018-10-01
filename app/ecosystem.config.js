const path = require('path');

const basePath = path.join(__dirname, './packages')

module.exports = {
  apps: [

    //Gateway Service
    {
      name: 'Gateway',
      script: basePath + '/gateway/server.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'one two',
      instances: 1,
      autorestart: false,
      watch: true,
      env: {
        NODE_ENV: 'development',
        PORT: 3000,
        SERVICE_DB_PORT: 4000,
        Q_URI: 'amqp://iiazuqea:E57QvFIMwN1AFcr504vRbGXszYXBFIHg@raven.rmq.cloudamqp.com/iiazuqea'
      }
    },

    //Database Service
    {
      name: 'DB Service',
      script: basePath + '/dabatase_service/server.js',

      // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
      args: 'one two',
      instances: 1,
      autorestart: false,
      watch: true,
      env: {
        NODE_ENV: 'development',
        PORT: 4000
      },
    },
  ],

};
