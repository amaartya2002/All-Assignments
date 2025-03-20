const express = require('express')

const app = express()

let numberOfRequestsForUser = {}

setTimeout(() => {
  numberOfRequestsForUser = {}
}, 5000)


function countRequests(req, res, next) {

  const userId = req.headers['user-id']

  if (numberOfRequestsForUser[userId]) {

    let count = numberOfRequestsForUser[userId]++;

    if (count > 5) {
      res.status(404).send('More than 5 requests...')
    } else {
      next()
    }


  } else {
    numberOfRequestsForUser[userId] = 1
    next()
  }
}


app.use(countRequests)

app.get('/test', (req, res) => {

  res.send('Server running properly')

})


app.listen(3000, () => {
  console.log('App listening on port 3000');
})