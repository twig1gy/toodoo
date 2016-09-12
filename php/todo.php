<?php
//connection
include "conn.php";

if($_POST['newTask'] == true){
    $newTask = $_POST["taskTitle"];
    //save newtask to db
    if(!$mysqli->query("INSERT INTO tasks(task_title) VALUES ('".$newTask."')")) {
        echo "Table creation failed: (" . $mysqli->errno . ") " . $mysqli->error;
    }
    else
        return true;
}
elseif(isset($_POST['taskID'])){
    if(!$mysqli->query("UPDATE tasks(task_title) VALUES ('".$updateTask."')")) {
        echo "Table update failed: (" . $mysqli->errno . ") " . $mysqli->error;
    }
    else
        return true;
}
else{
    echo "error adding task";
    return false;
}
?>