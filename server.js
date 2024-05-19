const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.json());

// 정적 파일 제공 설정
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'src', 'views')));

// API 라우트 연결
const authRoutes = require('./src/routes/authRoutes');
app.use('/api', authRoutes); 

// HTML 파일을 라우트를 통해 제공하기
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'views', 'login.html'));
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});