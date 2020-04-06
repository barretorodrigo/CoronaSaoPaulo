//https://www.npmjs.com/package/csvtojson
const csvFilePath="/home/barreto/node-JS-studies/CoronaSaoPaulo/data/06-04-2020-sp.csv";
const csvFilePathByCities="/home/barreto/node-JS-studies/CoronaSaoPaulo/data/06-04-2020-spByCities.csv";
const csv=require('csvtojson');

var express = require('express');
var app = express();

app.get('/all', async function (req, res) {
    const json = await csv().fromFile(csvFilePath);
    res.send(json);
});

app.get('/allbycities', async function (req, res) {
    const json = await csv().fromFile(csvFilePathByCities);
    res.send(json);
});

app.listen(3000, function () {
});

