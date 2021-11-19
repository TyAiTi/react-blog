<?php 
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$filepath = realpath(dirname(__FILE__));
require_once($filepath."/dbconfig.php");
$error = '{"status":0}';
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    $sql = "SELECT b.id_st, b.connecter_id,a.name, b.content,b.benefit,
            b.date_st
            FROM users as a, status as b
            WHERE a.id=b.connecter_id
            ORDER BY b.id_st DESC;";
    $result = mysqli_query($conn, $sql) or die("Error in Selecting ");
    //create an array
    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }

    //response
    sleep(0.5); 
    echo json_encode($emparray);
  }else{ 
    //method error
    
    echo ($error);
  }


mysqli_close($conn);
?>