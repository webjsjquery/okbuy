<?php 
	// 设置编码方式
	header("Content-type:text/html;charset=utf-8");

	//post提交过来的数据提取
	$username = $_POST['username'];
	$password = $_POST['password'];

	//少用户是否重名的验证

	//1、链接数据库
	$link = mysql_connect('localhost', 'root', 'root');
	//2、判断是否链接成功
	if(!$link){
		echo '数据库链接失败';
		exit; //退出
	}

	//3、设置字符集
	mysql_set_charset('utf8');

	//4、选择用哪个数据库
	mysql_select_db('okbuy');

	$time = time();

	//5、准备sql语句
	$sql = "insert into userdate(username,userpassword) values('{$username}','{$password}')";
	
	//6、发送sql语句
	$res = mysql_query($sql);

	 
	if($res){
		echo "<script>alert('注册成功！');location.href = '../login.html';</script>";
	}else{
		echo '注册失败';
		exit;
	}
	mysql_close($link);
?>

	