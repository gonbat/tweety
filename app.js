const express = require( 'express' );
const app = express();


app.listen(3000, function () {
    console.log('En el puerto: 3000!');
  });

  
  app.use('/user', function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
  });

app.get('/user', function (req, res) {
    res.send('HI')
    console.log("hi")
  })
  
  
  app.post('/user', function (req, res) {
    res.send('POST-Modernism')
    console.log("Post-modernism")
  })

