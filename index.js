const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));

// Fetch API設定
const jsonParser = bodyParser.json();
 
app.post('/fetch', jsonParser,  (req, res) => {
    console.log(req.body);
    const name = req.body.name;
    console.log('name->' + name);
    res.send('今日の一句：' + name);
});

app.listen(3000, () => {
    console.log('Start server port:3000');
});