var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "192.168.1.178",
  user: "blog",
  password: "123456",
  database: "blog"
})


// var connect = function(){
  connection.connect(function(err){
    if(!err){
      console.log("Database is connected !!")
    }else{
      console.log("Database connect fail !!")
    }
  })


var closeDB = function(){
  connection.end(function(err){
    if(!err){
      console.log("close db")
    }
  })
}


exports.showStatus = function( callbackStatus){
  let error = {
    status: 0
  }
  var sql = "SELECT b.id_st,"+
  "       b.connecter_id,a.name, b.content,b.benefit,"+
        " DATE_FORMAT(b.date_st, '%d/%l/%Y %H:%i') as date_st"+
  " FROM users as a, status as b"+
  " WHERE a.id=b.connecter_id"+
  " ORDER BY b.id_st DESC;"
  connection.query( sql,
    function(err, results, fileds){
    if(!err){
      callbackStatus(results)
    }else{
      console.log(err)
    }
  })
}


