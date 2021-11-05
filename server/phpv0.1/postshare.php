<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$filepath = realpath(dirname(__FILE__));
require_once($filepath."/dbconfig.php");
$error = '{"status":0, "code": "no method Post"}';
$errexist = '{"status":0, "code": "key not exist"}';
$errnull = '{"status":0, "code": "value null"}';
$errsql = '{"status":0, "code": "query sql"}';
$success = '{"status":1}';
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    
    //get file encode
    $json = file_get_contents('php://input'); 	
    $obj = json_decode($json,true);
    //parse file decode

    //check key null
    if ( isset($obj['connecter_id']) && isset($obj['content'])  
         && isset($obj['benefit']) ){
      //check value null
      if(empty($obj['connecter_id']) || empty($obj['content']) 
        || empty($obj['benefit'])){
        echo ($errnull);
      }else{
        //query
        $connecter_id = $obj['connecter_id'];
        $content = $obj['content'];
        $benefit = $obj['benefit'];
        $sql = "INSERT INTO status (id_st, connecter_id, content, date_st, benefit)
          VALUES (NULL, '$connecter_id', '$content', NULL, '$benefit')"; 
        $result = mysqli_query($conn, $sql) or die($errsql);
        
        //check insert success
        if($result){
            sleep(0.5); 
            echo ($success);
        }
      }
      
    }else{ //key null
      echo ($errexist);
    } 
    

  }else{ 
    //method error
    echo ($error);
  }


mysqli_close($conn);
?>