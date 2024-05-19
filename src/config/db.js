const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'appuser',
    password: '1234',
    database: 'crimeDB'
});

db.connect(err => {
    if (err) {
        console.error('Error connecting to the database: ' + err.stack);
        return;
    }
    console.log('Connected to database as ID ' + db.threadId);
});

module.exports = db;
