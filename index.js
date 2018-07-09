var express = require('express')
var request = require('request-promise')
var app = express()
var cookieParser = require('cookie-parser')
app.use(cookieParser())

var API_URL = require('./config').API_URL
var client = require('./elastic')

app.get('/*', function (req, res) {
  // client.index({  
  //   index: 'web-requests',
  //   type: '_doc',
  //   body: {
  //     "userId": req.cookies.userId,
  //     "date": Date.now(),
  //     "user-agent": req.headers['user-agent'],
  //     "url": req.path
  //   }
  // },function(err,resp,status) {
  //     // console.log(resp);
  // });
    var response = request({
    method: 'GET',
    url: `${API_URL}${req.path}`,
  }).then((data) => {
    res.status(200).send(data)
  }).catch((error) => {
    res.status(400).send(error)
  })
})

app.post('/*', function (req, res) {
    var response = request({
    method: 'POST',
    url: `${API_URL}${req.path}`,
  }).then((data) => {
    res.status(200).send(data)
  }).catch((error) => {
    res.status(400).send(error)
  })
})

module.exports = app.listen(3000);
