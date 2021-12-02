<?php
include "./01.php";
$id1=$_GET['id1'];
$sql="select * from myhouse where id='$id1'";
$result=mysqli_query($link,$sql);
if($row=mysqli_fetch_assoc($result)){ 
    echo json_encode($row);
}
mysqli_close($link);
?>