var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

// data insertion consider: csvtojson module
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("stocks");
  var myobj = { Date: "3/1/2006", Open: "57.169998  ", High: "58.490002", Low: "56.740002", Close: "58.310001", Adj_Close: "39.379498", Volume: "5377000"};
  dbo.collection("test").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();
  });
});

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("stocks");
  dbo.collection("test").findOne({}, function(err, result) {
    if (err) throw err;
    module.exports = result.Close
    console.log(result.Close);
    db.close();
  });
});
