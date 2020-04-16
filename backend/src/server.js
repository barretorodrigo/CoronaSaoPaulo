const path = require('path');

const csvFilePath=path.join(__dirname, '../data', '15-04-2020-sp.csv');
const csvFilePathByCities=path.join(__dirname, '../data', '15-04-2020-spByCities.csv');
const csv=require('csvtojson');

const lastUpdate={lastUpdate: "15/04 às 13:00"};

var express = require('express');
var app = express();
app.use(express.static(__dirname + '../data'));

app.get('/', async function (req, res) {
    res.send("Coronavírus - SP");
});

app.get('/update', async function (req, res) {
    res.send(lastUpdate);
});

app.get('/all', async function (req, res) {
    const json = await csv().fromFile(csvFilePath);
    res.send(json);
});

app.get('/allbycities', async function (req, res) {
    const { page = 0 } = req.query;
    let json=[];
    if (page==0){
        json = await csv().fromFile(csvFilePathByCities);    
    }else{
        json = await (await csv().fromFile(csvFilePathByCities)).slice(page*20-20,20*page);
    }
    const count = json.length;
    res.header('X-Total-Count', count);
    res.send(json);
});

app.listen(process.env.PORT || 3000, function () {
});

