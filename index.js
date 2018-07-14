var express = require('express')
var request = require('request-promise')
var app = express()
var cookieParser = require('cookie-parser')
app.use(cookieParser())

var API_URL = require('./config').API_URL
var postToElastic = require('./elastic/helpers').post

app.get('/*', function (req, res) {
    var response = request({
    method: 'GET',
    url: `${API_URL}${req.path}`,
  }).then((data) => {
    postToElastic(req, res, 200)
    res.status(200).send(data)
  }).catch((error) => {
    postToElastic(req, res, 400)
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
