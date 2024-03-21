const express = require('express');
const app = express();

app.get('/api/joe', (req, res) => {
    res.send('Hello World!');
});

app.listen(3001, () => {
    console.log('Server is running on port 3000');
});