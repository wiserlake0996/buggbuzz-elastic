var express = require('express');
var router = express.Router();

var dataCtrl = require('../controllers/data-submit-ctrl.js');

router.post('/email', dataCtrl.email);
    
    
router.post('/bug', dataCtrl.bug);
    
module.exports = router;