var client = require('../../config/elastic-config.js');

var searchDoc = function(req, res){
    //get request parameter
    var queryData = req.params.query;
    console.log('GET request val: ', queryData);
    
    //search elastic using request parameter
    client.search({
        index: 'bugs',
        type: 'bug',
        body: {
            query:{
                filtered:{
                    query:{
                        query_string:{
                            query: queryData
                        }
                    }/*,
                    filter:{
                        term:{
                            tag: queryData
                        }
                    }*/
                }
            }
        }
        
    }).then(function(result){
        
        var tmp;
        var dataHits =[] 
        
        // store hits or empty doc or empty array in tmp
        tmp = (result.hits || {}).hits || []
        
        for(var i = 0; i < tmp.length; i++)
        {
            dataHits.push(tmp[i]._source);
        }
        
        res.json(dataHits);
        console.log("elastic response: ", dataHits); 
    });
    
}; 

var searchId = function(req, res){
    var idData = req.params.id;

    client.search({
        index:'bugs',
        type:'bug',
        body:{
            query:{
                filtered:{
                    query:{
                        query_string:{
                         query: idData
                        }
                    },
                    filter:{
                        term:{
                            id:idData
                        }
                    }
                    
                }
            }
        }
        
    }).then(function(result){
        var tmp;
        var dataHits =[] 
        
        // store hits or empty doc or empty array in tmp
        tmp = (result.hits || {}).hits || []
        
        for(var i = 0; i < tmp.length; i++)
        {
            dataHits.push(tmp[i]._source);
        }
        
        res.json(dataHits);
        console.log("elastic response: ", dataHits); 
    });

};


module.exports.searchDoc = searchDoc;
module.exports.searchId = searchId;


// search 
