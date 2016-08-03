<?php  

$arr = array(
	array(
		'id' => 1,
		'type' => 1,
		'name' => '绝地逃生',
		'picurl' => 'http://pic.maizuo.com/usr/100002716/0730af843df5c04b4483c311e095f06f.jpg',
		'desc' => '成龙被人骗 冰冰有危险',
		'date' => '2016-7-23',
		'score' => '8.5',
		'cinemanum' => 2356,
		'salenum' => 4589
	),
	array(
		'id' => 2,
		'type' => 2,
		'name' => '封神榜',
		'picurl' => 'http://pic.maizuo.com/usr/100003043/93d684dfeb4b348d7b67663f07a7d1cd.jpg',
		'desc' => '商军大举入侵 终极一战爆发',
		'date' => '2016-8-3',
		'score' => '',
		'cinemanum' => 0,
		'salenum' => 0
	),
	array(
		'id' => 3,
		'type' => 1,
		'name' => '神秘世界历险记3',
		'picurl' => 'http://pic.maizuo.com/usr/100003046/c35bbb4878f934e99d6e90a7b58e2a96.jpg',
		'desc' => '父女肩并肩 奇境嗨翻天',
		'date' => '2016-7-11',
		'score' => '7.1',
		'cinemanum' => 2356,
		'salenum' => 4589
	),
	array(
		'id' => 4,
		'type' => 1,
		'name' => '泰山归来',
		'picurl' => 'http://pic.maizuo.com/usr/100003086/a735fcab33e81112d3b52a5e6fb2fff5.jpg',
		'desc' => '泰山重上映 归来战丛林',
		'date' => '2016-8-20',
		'score' => '7.8',
		'cinemanum' => 2356,
		'salenum' => 4589
	),
	array(
		'id' => 5,
		'type' => 2,
		'name' => '龙泉小子',
		'picurl' => 'http://pic.maizuo.com/usr/100003094/cf663eb9b582a28776d24c2b70201d7e.jpg',
		'desc' => '小子会龙泉 犯罪被海扁',
		'date' => '2016-8-10',
		'score' => '',
		'cinemanum' => 0,
		'salenum' => 0
	),
	array(
		'id' => 6,
		'type' => 1,
		'name' => '盗墓笔记',
		'picurl' => 'http://pic.maizuo.com/usr/100003111/b73c302b84f826d78ccdccce32c69947.jpg',
		'desc' => '转战大银幕 瓶邪党必顶',
		'date' => '2016-8-18',
		'score' => '9.2',
		'cinemanum' => 2356,
		'salenum' => 4589
	)
);


$res = array();
if (!isset($_GET['type']) || $_GET['type'] == 'online') {
	for ($i = 0; $i < count($arr); $i++) { 
		if ($arr[$i]['type'] == 1) {
			$res[] = $arr[$i];
		}
	}
} else {
	for ($i = 0; $i < count($arr); $i++) { 
		if ($arr[$i]['type'] == 2) {
			$res[] = $arr[$i];
		}
	}
}


$json = json_encode($res);
echo $_GET['jsoncallback'] . "(" . $json . ")";

?>