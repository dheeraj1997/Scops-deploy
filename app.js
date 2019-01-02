const express = require('express');
const app = express();

const path = require('path');

var port = process.env.PORT || 4200;
// var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://dheeraj:dheeraj123@ds123584.mlab.com:23584/cricket";
// var url = "mongodb://localhost:27017/";

// mongoose.connect('mongodb://localhost:27017/cricket/balls', function (err, db){
//   if(err){
//     throw err;
//   }
//   console.log("connected");
// });

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,authorization,access-control-allow-origin");
  res.header("Access-Control-Allow-authorization", "*");
  next();
});
app.use(express.static('dist'));

app.get('/api/balls', function (req, res) {
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("cricket");
    var query = [
    {$match: {"Match_Id": 981024}},
    {$group:{
        _id:{
          Match_Id:"$Match_Id",
          Innings_Id:"$Innings_Id",
          Over_Id:"$Over_Id"
          },
        runs:{$sum:"$Batsman_Scored"},
        extras:{$sum:"$Extra_Runs"}
      }
    },
      {$sort: {"_id.Innings_id":1,"_id.Over_Id":1}}
    ];
    dbo.collection("balls").aggregate(query).toArray(function(err, result) {
      if (err) throw err;
      console.log((result));
      db.close();
      // let data = JSON.parse(result);
      res.send(result);
    });
  });
});

app.get('/*', function(req, res) {
  // console.log(path.join(__dirname, '/dist/index.html'));
  res.sendFile(path.join(__dirname, '/dist/index.html'))
});

app.listen(port, function () {
  console.log('App service listening on port ',port);
  // console.log(path.join(__dirname, '/dist/index.html'));
});
