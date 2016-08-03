<?php  

$arr = array(
		array(
			'id' => 1,
			'title' => "首页",
			'url' => '/'
		),
		array(
			'id' => 2,
			'title' => "电影",
			'url' => '/film'
		),
		array(
			'id' => 3,
			'title' => "影院",
			'url' => '/cinema'
		),
		array(
			'id' => 4,
			'title' => "个人中心",
			'url' => '/home'
		),
		array(
			'id' => 5,
			'title' => "影票查询",
			'url' => '/ticket'
		)
	);

$json = json_encode($arr);
echo $_GET['jsoncallback'] . "(" . $json . ")";

?>