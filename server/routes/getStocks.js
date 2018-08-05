const Stock = require ('../models/stocks') //install mongoose
const fs = require ('fs') //install fs

//====LIST DEPENDENCIES===//
const express = require('express');
//const parseurl = require('parseurl');
//const bodyParser = require('body-parser');
//const path = require('path');
//const expressValidator = require('express-validator');
const mongoose = require('mongoose');

const app = express();
const url = 'mongodb://localhost:27017/stocks';
//=========================//

//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
    res.json('you did it');
  });
  //==========================//
  //====GET ALL STOCKS===//
  app.get('/api/stocks', function(req, res) {
    Stock.find({}).then(eachOne => {
      res.json(eachOne);
      })
    })
  //==========================//
  //====This app does not have post url as users are not supposed to send data to database===//
   
  //==========================//

//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
    if (err) {
      console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
      console.log('Connection established to', url);
    }
   });
   //==========================//