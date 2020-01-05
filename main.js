import 'dotenv/config';
import cors from 'cors';
import express from 'express';
const path = require('path');

const app = express();

app.use(cors());


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get('/MatchHistory', (req, res) => {
	res.sendFile(__dirname + '/MatchHistory.html');
})

app.get('/tftItems', (req, res) => {
	res.sendFile(__dirname + '/tftItems.html');
})


app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}`),
);




//console.log(process.env.MY_SECRET);