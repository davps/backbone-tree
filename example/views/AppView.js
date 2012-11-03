BS.menu.view.AppView = Backbone.View.extend({

	initialize: function(){
		_.bindAll(this, "render");
		this.render();
	},

	render: function(){
		var menuView = new BS.menu.view.MenuView({
			collection:this.collection
		});
		this.$el.append(menuView.render().el);
		return this;
	}
	
});