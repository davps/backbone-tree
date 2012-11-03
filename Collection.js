BS.menu.collection.Collection = Backbone.Collection.extend({
    model: BS.menu.model.Model,

    initialize: function(){
        _.bindAll(this, "setMenuTree", "getMenuTree", "sync");
        this.currentMenu;
    },

    setMenuTree: function(menu){
        this.menu = menu;
    },

    getMenuTree: function(){
        return this.menu;
    },

    sync: function(method, model, options){
        var params = {}, i, models;

        options || (options = {});

        if (!options.url) {
          params.url = model.url;
        }

        if(params.url == "menu"){
            this.currentMenu = this.menu;
            options.success(this.menu);
            return;
        }

        var childs;
        _.each(this.currentMenu, function(item){
            if(item[params.url]){
                childs = item[params.url];
            }
        }, this);

        this.currentMenu = childs;

        var models_array = _.isArray(childs) ? childs.slice() : [childs];

        if (method === 'read') {
            options.success(models_array);
        }


    }

});
