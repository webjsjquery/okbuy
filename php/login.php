<?php
	// 设置编码方式
	
	include "public.php";

	//post提交过来的数据提取
	$username = $_POST['username'];
	$password = $_POST['password'];
	
	$sql = "SELECT * FROM `userdate` WHERE username = '$username'";
	

	
	if($arr['username'] = $username){
		if($arr['password'] = $password){
			echo "<script>alert('登录成功！');location.href = '../index.html';</script>";
		}else{
			echo "密码错误";
		}
	}else{
		echo "用户不存在";
	}
?>