const express = require('express')

const app = express()

let numberOfRequests = 0


function countRequests(req, res, next) {

  numberOfRequests++;

  console.log(numberOfRequests);

  next()

}

app.use(countRequests)


app.get('/test', (req, res) => {

  res.send('Server working properly...')
})

app.get('/tests', (req, res) => {

  res.send('Server working properly here too...')

})



app.listen(3000, () => {
  console.log('App listening on port 3000');
})