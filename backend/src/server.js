const path = require('path');

const csvFilePath=path.join(__dirname, '../data', '06-04-2020-sp.csv');
const csvFilePathByCities=path.join(__dirname, '../data', '06-04-2020-spByCities.csv');
const csv=require('csvtojson');


var express = require('express');
var app = express();
app.use(express.static(__dirname + '../data'));

app.get('/', async function (req, res) {
    res.send("Corona Vírus - SP");
});

app.get('/all', async function (req, res) {
    const json = await csv().fromFile(csvFilePath);
    res.send(json);
});

app.get('/allbycities', async function (req, res) {
    const json = await csv().fromFile(csvFilePathByCities);
    res.send(json);
});

app.listen(process.env.PORT || 3000, function () {
});

