var mongo= require("mongoose");
mongo.Promise=require('bluebird');
var path=require('path')
require('dotenv').config({path:'../process.env'}) 

var mongoDB= process.env.DATABASE_URL;

mongo.connect(mongoDB,function (err1,err2) {
    if(err1){
        console.log("Database connect error: "+err1.log)
    }else {
        console.log("Connected to database",mongoDB)
    }
})