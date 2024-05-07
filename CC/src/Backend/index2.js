var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://lyricthefirst:jasmine7@kdsdcluster.9buoqvk.mongodb.net/?retryWrites=true&w=majority&appName=KDSDCluster";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  dbo.createCollection("customers", function(err, res) {
    if (err) throw err;
    console.log("Collection created!");
    db.close();
  });
});