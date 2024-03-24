const express = require('express');
const app = express();

app.get('/api/joe', (req, res) => {
    res.send('Hello World!');
});
app.post('/api/login', (req, res) => {
    res.send( {yes: 'Logged in'});
    // Replace whats here with db transaction boys :)
});
app.post('/api/logout', (req, res) => {
    res.send({ yes: 'Logged out'});
    // Replace whats here with db transaction boys :)
});
app.post('/api/signup', (req, res) => {
    res.send({yes: 'Success'});
    // Replace whats here with db transaction boys :)
});

app.listen(3001, () => {
    console.log('Server is running on port 3000');
});