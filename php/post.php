<?php
include "./01.php";
$n=$_GET['name1'];
$p=$_GET['pass1'];
$sql="insert into logintable(name1,pass1) values('$n','$p')";
$result=mysqli_query($link,$sql);
if($result){
  echo "1";
  }else{
    echo "0";
  }
mysqli_close($link);
?>