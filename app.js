var express = require('express');
var app = express();
var credit = 100;
var extract = function(){
  return parseInt(Math.random()*37)
}

app.get('/hello/:message', function (req, res) {
    res.json({message: "you are welcome " + req.params.message})
});

app.get('/', function (req, res) {
    res.json({message: "you are welcome"})
});


app.listen(3001);
module.exports = app;
