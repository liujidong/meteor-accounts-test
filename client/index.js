Template.index.helpers({
	isLogin:function(){
		return Meteor.userId();
	},
	user:function(){
		return {
			id:Meteor.user()._id,
			email:Meteor.user().emails[0].address
		};
	}
});

Template.index.events({
	'click #btn_logout':function(event,template){
		AccountsTemplates.logout();
	}
});