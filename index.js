'use strict';
// const xx= require('./a.tcbfile')
const cors = require('cors')
const express = require('express');
const app = express();
const server = require('http').createServer(app);
const Firebird = require('node-firebird');

require('dotenv').config()

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

let options = {};
options.host = 'localhost';
options.port = 3050;
options.database = './home/amr/401/firebird/a.tcbfile';
options.user = 'SYSDBA';
options.password = 'masterkey';
// options.lowercase_keys = false; // set to true to lowercase keys
// options.role = null;            // default
// options.pageSize = 4096;        // default when creating database
// options.pageSize = 4096;        // default when creating database
// options.retryConnectionInterval = 1000; // reconnect interval in case of connection drop

// Firebird.create(options, function(err, db){
//     console.log(err);
//     console.log(db);
// })
Firebird.attach(options, function(err, db) {
console.log(db);
console.log(err);
    // if (err)
    //     throw err;}
    db.query('SELECT * FROM users', function(err, result) {
        db.detach();
        console.log(result);
    });

});


server.listen(8080, () => console.log('\x1b[41m%s\x1b[0m', `Listening on ${8080}`))
module.exports = {
    start: (port) => {        if (!port) { throw new Error('Missing Port'); }
    },
};