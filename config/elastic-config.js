var elasticsearch = require('elasticsearch');

//connect to host
var client = new elasticsearch.Client({
  host: 'https://l0xtnFbnpU6nNO45INnvMgqQBt2DUgN0:@azure-f3f459d75d624920a618b7a7710b8f69.west-us.azr.facetflow.io',
  apiVersion: '1.0'
});

//get the current status of the entire cluster
client.cluster.health(function(err,resp){
    if(err){
        console.error(err.message);
    }else{
        console.dir(resp);
    }
});

console.log("\n Waiting for more data..! \n");
module.exports = client;