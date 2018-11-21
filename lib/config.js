if(Meteor.isClient){
	Meteor.startup(function(){
		T9n.setLanguage('zh-CN');
	});
}