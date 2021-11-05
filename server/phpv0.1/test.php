<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$filepath = realpath(dirname(__FILE__));
require_once($filepath."/dbconfig.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    //nhan file ma hoa
    $json = file_get_contents('php://input'); 	
    $obj = json_decode($json,true);
    //phan tich giai ma
    $name = $obj['name'];
    
    //response
    echo json_encode($name);
  }else{ 
    //method error
    echo json_encode('try again');
  }



mysqli_close($conn);
?>