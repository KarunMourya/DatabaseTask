var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://0.0.0.0:27017/local";

MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  var dbo = db.db("local")
  dbo.collection("Product").find({}).toArray(function(err, result){
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
