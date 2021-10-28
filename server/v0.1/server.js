const express = require('express');
const app = express();
var database = require("./database");
const http = require("http"); //dung cho socket io
var server = http.Server(app);

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());//doi voi su dung PostMan
app.use(bodyParser.raw());

app.use((req, res, next) => {
  res.append('Access-Control-Allow-Origin', ['*']);
  res.append('Access-Control-Allow-Methods', 'GET,POST');
  res.append('Access-Control-Allow-Headers', 'Content-Type');
  next();
});//khai bao header ho tro react

//default trang chu
app.get("/", (req, res) => {
  res.send("Start Server NodeJS for blog version: v0.1");
});

app.post("/v0.1/allstatus", (req, res) =>{
    database.getAllStatus( function(resultQuery){
      setTimeout(function() {
        res.json(resultQuery)
      }, 500); //time out
    })
})// /v0.1/allstatus

app.get("/v0.1/status", (req, res)=>{
  database.showStatus(function(resultQuery){
    setTimeout(function() {
      res.json(resultQuery)
    }, 500); //time out
  })
})// /v0.1/status

server.listen(4000, () => console.log('API is running on http://localhost:4000'));
