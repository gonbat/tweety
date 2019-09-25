var morgan = require('morgan')
const express = require( 'express' );
const app = express();
const nunjucks=require('nunjucks')
const routes = require('./routes');
app.use('/', routes);
app.use(express.static('public')) 


app.use(morgan('combined'))
app.set('view engine', 'html'); 
app.engine('html', nunjucks.render);

nunjucks.configure('views', { noCache: true });

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];



nunjucks.configure('views', {noCache: true});
nunjucks.render('index.html', function (err, output) {
  console.log(output);
});

app.listen(3000, function () {
    console.log('En el puerto: 3000!');
  });
