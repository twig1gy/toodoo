<?php
//connection
include "conn.php";

$res = $mysqli->query("SELECT * FROM tasks");
$res->data_seek(0);
while ($row = $res->fetch_assoc()) {
    echo " id = " . $row['task_id'] . "\n";
    echo " title = " . $row['task_title'] . "\n";
}
?>