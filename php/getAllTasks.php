<?php
//connection
include "conn.php";
$tasks = array();

$res = $mysqli->query("SELECT * FROM tasks");
$res->data_seek(0);
while ($row = $res->fetch_assoc()) {
    $tasks[] = $row;
}
echo json_encode($tasks);
?>