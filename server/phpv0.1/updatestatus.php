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
    if ( isset($obj['id_st']) && isset($obj['content'])  
    && isset($obj['benefit']) ){
      //check value null
      if(empty($obj['id_st']) || empty($obj['content']) 
      || empty($obj['benefit'])){
        echo ($errnull);
      }else{//query
        $id_st = $obj['id_st'];
        $content = $obj['content'];
        $benefit = $obj['benefit'];
        $sql = "UPDATE status SET content = '$content', benefit = '$benefit' 
                WHERE id_st = '$id_st'";
        $result = mysqli_query($conn, $sql) or die($error);
        
        //check insert success
        if($result){
            sleep(0.5); 
            echo ($success);
        }
      }
    }else{
      echo ($errexist);
    }

  }else{ 
    //method error
    echo ($error);
  }


mysqli_close($conn);
?>