BS.menu.view.MenuBreadcrumbView = Backbone.View.extend({
 	template: JST["modules/menu/templates/menuBreadcrumb"],

 	events: {
 		"click a" : "handleClick"
 	},

	initialize: function(){
		_.bindAll(this, "render", "handleClick");
	},

	handleClick: function(e){
		e.preventDefault();
		this.collection.url = "menu";
		this.collection.fetch();
	},

	render: function(){
		this.$el.append(this.template({}));
		return this;
	}

});
