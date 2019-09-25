const express = require('express');
const router = express.Router();
// Se puede usar solo una linea: const router = require('express').Router();
const tweetBank = require('../twitterBank');
router.get('/', function (req, res) {
  let alltweets = tweetBank.list();
  res.render( 'index', { tweets: alltweets } );
});

router.get( '/users/:name', function (req, res) {
  let tuit= tweetBank.find({name:req.params.name})
  res.render( 'index', { tweets: tuit } );
});

router.get('/tweets/:id', function(req, res) {
  let id= tweetBank.find({id:parseInt(req.params.id)})

  res.render( 'index', { tweets: id } );
});


module.exports = router;


