<?php
include "./01.php";
$n=$_GET['name1'];
$p=$_GET['pass1'];
$sql="select * from logintable where name1='$n' and pass1='$p'";
$result=mysqli_query($link,$sql);
if($row=mysqli_fetch_assoc($result)){
    echo "1";
}else{
    echo "0";
}
mysqli_close($link);

?>