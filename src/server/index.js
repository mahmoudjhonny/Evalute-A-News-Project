require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require('body-parser');
const { analyse } = require('./analyse');

const { SERVER_PORT } = process.env;


const app = express();
app.use(cors());
app.use(bodyParser());
app.use(express.static('dist'))

app.get('/', function(req, res) {
    // res.sendFile(path.resolve('src/client/views/index.html'))
    res.sendFile(path.resolve('dist/index.html'))
})

app.post('/analyse', analyse)


app.get('/test', function(req, res) {
    res.send(mockAPIResponse)
})

app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}!`)
})

module.exports = {
    app,
}