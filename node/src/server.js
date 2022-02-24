import app from './app.js';

app.listen(8000, () => {
    console.log('Listening to Port 8000');
});
//npm install simple-node-logger --save 

// // Add this to your app.js and whereever you want logging.

// const SimpleNodeLogger = require('simple-node-logger'),
//         opts = {
//                 logFilePath:'mylogfile.log',
//                 timestampFormat:'YYYY-MM-DD HH:mm:ss.SSS'
//         },
// log = SimpleNodeLogger.createSimpleLogger( opts );
// log.info('subscription to ', channel, ' accepted at ', new Date().toJSON())

