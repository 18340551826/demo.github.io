<?php
include "./01.php";
$sql="select * from myhouse";
$result=mysqli_query($link,$sql);
$ar1=[];
while($row=mysqli_fetch_assoc($result)){
    array_push($ar1,$row);
}
echo json_encode($ar1);
mysqli_close($link);

?>