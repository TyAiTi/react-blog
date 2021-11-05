<?php



define('DB_USER', "blog"); // tk DB
define('DB_PASSWORD', "123456"); // mat khau
define('DB_DATABASE', "blog"); //ten DB
define('DB_SERVER', "localhost"); //localhost

$conn = mysqli_connect(DB_SERVER, DB_USER, DB_PASSWORD, DB_DATABASE);
mysqli_query($conn, "SET NAMES 'utf8'");

?>
