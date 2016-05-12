var now=new Date(); 
qb.superbond.aggregate( 
	{$match: {_id: ‘这个已知是个参数’}}, //首先去match这个人的ID，取得一条 
	{$project: {friends: 1,_id: 0,name:1}}, //为1表示要这个属性，为0表示不要 
	{$unwind: ‘$friends’}, //展开friends 子文档 数组 
	{$match: {‘friends._id’: ‘这个已知是个参数，比如是从friends列表中取的’}}, //取match 
	{$group: { //组织要output的 
		friends:{$push: ‘$friends’}, 
		_id: null, 
		name: {$first: ‘$name’} 
		}
}, function(error,reply){ 
	var buffer = reply[0].chapter[0]; // console.log(’======= ',buffer); //测试的时候可以放开，运行时必须去掉，因为会影响处理速度，当friends为100条时，只用了5ms就搞定了。 
	console.log(‘time ：’+(new Date().getTime()-now.getTime())+‘ms’); 
});