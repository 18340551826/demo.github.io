<?php
//设置页面编码
header("content-type:text/html;charset=utf-8");
//连接数据库
$link=mysqli_connect("localhost",'root','','mystyle');
//设置数据库编码
mysqli_set_charset($link,"utf8");
?>

