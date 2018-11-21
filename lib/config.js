if(Meteor.isClient){
	Meteor.startup(function(){
		//https://atmospherejs.com
		//取得浏览器当前的语言编码
		var lang = window.navigator.language || window.navigator.userLanguage;
		console.log(lang);

		//T9n中有的语言编码和浏览器的语言名称大小写不一致
		//可以自己根据情况进行转换
		//lang = lang.toLowerCase()

		//执行T9n的语言设置
		T9n.setLanguage(lang);
	});
}