const express = require( 'express' );
const app = express();
const nunjucks=require('nunjucks')
app.set('view engine', 'html'); 
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


app.listen(3000, function () {
    console.log('En el puerto: 3000!');
  });

  
  app.use('/user', function (req, res, next) {
    console.log('Request Type:', req.method);
    next();
  });

app.get('/user', function (req, res) {
    console.log("hi")
    res.render( 'index', {title: 'Hall of Fame', people: people} );

  })
  
  
  app.post('/user', function (req, res) {
    res.send('POST-Modernism')
    console.log("Post-modernism")
  })

  var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', locals, function (err, output) {
    console.log(output);
});

