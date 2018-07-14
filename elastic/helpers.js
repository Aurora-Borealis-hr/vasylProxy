var client = require('./elastic-client')

const post = (req, res, status) => {
  client.index({  
    index: 'web-requests',
    type: 'doc',
    body: {
      "userId": req.cookies.userId,
      "date": Date.now(),
      "user-agent": req.headers['user-agent'],
      "url": req.path,
      "status": status
    }
  },function(err,resp,status) {
    // console.log(resp);
  });
}

module.exports.post = post;
