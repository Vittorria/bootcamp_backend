const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const jsonParser = bodyParser.json()

const hostname = '127.0.0.1';
const port = 3333;

var mainRouter = require('./routes/general.router');

/* =========== Some Initialize stuff =============== */

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // console.log("body", req.body);
    next();
});


app.use(bodyParser.json());
app.use(express.json());
app.use(  '/', mainRouter);

module.exports = app;
