var express = require('express')
var request = require('request-promise')
var app = express()
var API_URL = require('./config').API_URL

app.get('/*', function (req, res) {
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
