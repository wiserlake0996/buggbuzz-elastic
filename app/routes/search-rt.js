var express = require('express');
var elasticClient = require('../controllers/elastic-ctrl.js');

var router = express.Router();

router.get('/', function(req, res){
    res.json({"message":"search home"});
});

router.get('/q/:query', elasticClient.searchDoc);
router.get('/id/:id', elasticClient.searchId);


module.exports = router;