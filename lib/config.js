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

		ServiceConfiguration.configurations.remove({
			service:"qq"
		});
		ServiceConfiguration.configurations.insert({
			service:"qq",
			clientId:"connect.qq.com",
			scope:'get_user_info',
			secret:"connect.qq.com"
		});
	});
}

AccountsTemplates.removeField('email');
AccountsTemplates.removeField('password');
AccountsTemplates.addFields([
{
	_id:'username',
	type:'text',
	required:true,
	displayName:'username',
	placeholder:'	'
},
{
	_id:'password',
	type:'password',
	required:true,
	displayName:'密码',
	placeholder:' ',
	re:/^[a-z]{6,}$/,
	errStr:'6位以上小写字母'
},
{
	_id:'password_again',
	type:'password',
	required:true,
	displayName:'密码确认',
	placeholder:' '
},
{
	_id:'phone',
	type:'tel',
	displayName:'手机',
	placeholder:' '
}
]);