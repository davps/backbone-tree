BS.menu.view.MenuView = Backbone.View.extend({
	id:"menu-menu",

 	template: JST["modules/menu/templates/menu"],

	initialize: function(){
		_.bindAll(this, "render", "renderItem");
		this.collection.on("reset", this.render);
	},

	renderItem: function(model){
		var itemView = new BS.menu.view.MenuItemView({
			model:model,
			collection: this.collection
		});
		$("#menu-list", this.$el).append(itemView.render().el);
	},

	render: function(){
		this.$el.html("<br>");
		this.$el.append(this.template({}));

		var view = new BS.menu.view.MenuBreadcrumbView({
			collection: this.collection
		});
		$(".breadcumb-section", this.$el).append(view.render().el);

		if(this.collection.length > 0){
			this.collection.each(this.renderItem);
		}else{
			//render Loading;
		}
		return this;
	}
});
