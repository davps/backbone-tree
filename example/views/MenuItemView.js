BS.menu.view.MenuItemView = Backbone.View.extend({
	tagName: "li",

 	template: JST["modules/menu/templates/menuItem"],

 	events: {
 		"click a" : "updateCollection"
 	},

	initialize: function(){
		_.bindAll(this, "render", "updateCollection");
	},

	updateCollection: function(e){
		e.preventDefault();
		//this.collection.url = this.collection.getUrlRoot() + "/" + this.model.get("path");

		var type = this.model.get("type");
		if(type === "dir"){
			this.collection.reset();
			this.collection.url = this.model.get("path");
			this.collection.fetch();
		}else if (type === "file"){
			//Fire drag event or something like that
		}
	},

	render: function(){
		var type = this.model.get("type");

		if(type === "dir"){
			this.$el.append(this.template(this.model.toJSON()));
		}else if (type === "file"){
			this.$el.append("<a href='#'><button class='btn btn-"+this.model.get("path")+"'>"+this.model.get("name")+"</button></a>");
		}
		return this;
	}
});
