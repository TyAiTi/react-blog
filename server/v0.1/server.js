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

app.post("/v0.1/postshare",(req,res)=>{
  let error = {
    status: 0
  }
  if (!req.body.connecter_id || !req.body.content || !req.body.benefit
      || isNaN(req.body.connecter_id) || isNaN(req.body.benefit) ){
      console.log("loi")
      res.send(error)
  }else{
    var connecter_id = req.body.connecter_id
    var content = req.body.content
    var benefit = req.body.benefit

    database.saveShare(connecter_id, content, benefit, function(resultQuery){
      // res.json(resultQuery)
      setTimeout(function() {
        res.json(resultQuery)
      }, 200); //time out
    })
  }
})// /v0.1/postshare

app.post('/v0.1/removestatus',(req,res)=>{
  let error = {status: 0}
  if (!req.body.id_st  || isNaN(req.body.id_st) ){
    console.log("loi")
    res.send(error)
}else{
  var id_st = req.body.id_st
  database.removeStatus(id_st, function(resultQuery){
    setTimeout(function() {
      res.json(resultQuery)
    }, 200); //time out
  })
}
})

app.post('/v0.1/editstatus',(req,res)=>{
  let error = {status: 0}
  if (!req.body.id_st || !req.body.content || !req.body.benefit
    || isNaN(req.body.id_st) || isNaN(req.body.benefit) ){
    console.log("loi")
    res.send(error)
}else{
  var id_st = req.body.id_st
  var content = req.body.content
  var benefit = req.body.benefit

  database.editShare(id_st, content, benefit, function(resultQuery){
    // res.json(resultQuery)
    setTimeout(function() {
      res.json(resultQuery)
    }, 200); //time out
  })
}
})
server.listen(5000, () => console.log('API is running on http://localhost:5000'));
