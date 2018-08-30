var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');


var items = require('../database-mysql');

var app = express();

app.use(morgan('dev'));
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/api/url', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post('/api/url', (req, res) => {
  // Convert url into shortened version 
  console.log(req.body)
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

