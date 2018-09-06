// Import library/frameworks
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

// Import database 
var items = require('../database-mysql');

var app = express();

app.use(morgan('dev'));
// parse application/x-www-form-urlencoded and application/json
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/url', function (req, res) {
  items.selectAll(function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
  // const urlArr = ['url1', 'url2', 'url3'];
  // res.send(urlArr);
});

app.post('/api/url', (req, res) => {
  // Convert url into shortened version 
  console.log(req.body)
});

app.listen(3000, function () {
  console.log('listening on port 3000!');
});

