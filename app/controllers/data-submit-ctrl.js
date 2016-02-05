var db = require('../models/index.js');

var emailDB = db.emailSubmit;
var bugDB = db.bugSubmit;

var bug = function(req,res){
    
    console.log('request recieved! data:', req.body.body );
    var bugData = new bugDB({ description: req.body.description, body:req.body.body });
        bugData.save(function (err) {
            if (err){ // ...
                console.log('error');
                res.send(err);
            }else{
                console.log("worked!");
                res.send("data inserted");
            }
        }); 
};

var email = function(req, res){
    
    console.log('request recieved! data:', req.body.email );
    var emailData = new emailDB({ email: req.body.email });
        emailData.save(function (err, data) {
            if (err){ // ...
                console.log('error');
                res.send(err);
            }else{
                console.log("worked! ", data);
                res.send("data inserted");
            }
        });    
}


module.exports.email = email;
module.exports.bug = bug;