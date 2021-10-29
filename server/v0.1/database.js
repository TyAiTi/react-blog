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

exports.saveShare = function(connecter_id, content, benefit, callbackShare){
  let error = {
    status: 0
  }
  connection.query("INSERT INTO status (id_st, connecter_id, content, date_st, benefit)"+
    " VALUES (NULL, '"+connecter_id+"', '"+content+"', NULL, '"+benefit+"')",
    function(err, results, fields){
      if(!err){//query login success
          if(results.insertId > 0){
            // console.log(results)
            callbackShare({status: 1, id_st: results.insertId})
          }else{
            console.log(results)
            console.log("cho nay")
            callbackShare(error)
          }
      }else {//query login failed
        console.log("'loi")
        callbackShare(error)
        }
    }
  )
}

exports.removeStatus = function(id_st, callbackRemove){
  let error = { status: 0 }
  if (!id_st  || isNaN(id_st) ){
    return callbackRemove(error)
  }
  var sql = "DELETE FROM status WHERE id_st = '"+id_st+"'";
  connection.query(sql,
    function(err, results, field){
      if(!err){
        // console.log(results)
        return callbackRemove({status: 1})
      }else{
        return callbackRemove(error)
      }
    })
}

exports.editShare = function(id_st, content, benefit, callbackShare){
  let error = { status: 0 }
  if (!id_st || !content || !benefit
    || isNaN(id_st) || isNaN(benefit) ){
      callbackShare(error)
  }
  var sql = "UPDATE status SET content = '"+content+"', benefit = '"+benefit+"' "+
            " WHERE id_st = '"+id_st+"'";
  connection.query(sql,
    function(err, results, field){
      if(!err){
        return callbackShare({status: 1})
      }else{
        return callbackShare(error)
      }
    })
}