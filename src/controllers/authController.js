const db = require('../config/db'); // 가정: 데이터베이스 연결 모듈

exports.login = (req, res) => {
    const { username, password } = req.body;
    db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, results) => {
        if (err) {
            return res.status(500).json({ status: 'error', message: 'Internal server error' });
        }
        if (results.length > 0) {
            res.json({ status: 'ok', message: 'Login successful' });
        } else {
            res.status(401).json({ status: 'error', message: 'Invalid credentials' });
        }
    });
};
