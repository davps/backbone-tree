BS.menu.Module = function(){

    //var url = "https://api.github.com/users/davps/repos";
    //var url = "https://api.github.com/repos/davps/backbone.hulk/contents";



var menu = 
[
  {
    "name": "HTML elements",
    "type": "dir",
    "path": "html_elements",
    "html_elements": [
      {
        "name": "Fonts",
        "type": "dir",
        "path": "font_size",
        "font_size": [
          {
            "name": "Pequeño",
            "type": "file",
            "path": "pequenho"
          },
          {
            "name": "Normal",
            "type": "file",
            "path": "normal"
          },
          {
            "name": "Grande",
            "type": "file",
            "path": "grande"
          },
          {
            "name": "Enorme",
            "type": "file",
            "path": "enorme"
          }
        ]
      },
      {
        "name": "Buttons",
        "type": "dir",
        "path": "buttons",
        "buttons": [
          {
            "name": "Default",
            "type": "file",
            "path": "default"
          },
          {
            "name": "Primary",
            "type": "file",
            "path": "primary"
          },
          {
            "name": "Info",
            "type": "file",
            "path": "info"
          },
          {
            "name": "Success",
            "type": "file",
            "path": "success"
          },
          {
            "name": "Warning",
            "type": "file",
            "path": "warning"
          },
          {
            "name": "Danger",
            "type": "file",
            "path": "danger"
          },
          {
            "name": "Inverse",
            "type": "file",
            "path": "inverse"
          },
          {
            "name": "Link",
            "type": "file",
            "path": "link"
          }
        ]
      },
      {
        "name": "Image",
        "type": "dir",
        "path": "image",
        "image": [
          {
            "name": "Rounded",
            "type": "file",
            "path": "rounded"
          },
          {
            "name": "Circle",
            "type": "file",
            "path": "circle"
          },
          {
            "name": "Polaroid",
            "type": "file",
            "path": "polaroid"
          },
          {
            "name": "Standard",
            "type": "file",
            "path": "standard"
          }
        ]
      }
    ]
  },
  {
    "name": "Standard components",
    "type": "dir",
    "path": "std-comps"
  },
  {
    "name": "Custom components",
    "type": "dir",
    "path": "cus-comps"
  }
];

/*console.log(JSON.stringify(menu, null, 2));
console.log(menu);*/


    url = "menu";
    var collection = new BS.menu.collection.Collection();
    collection.setMenuTree(menu);
    collection.currentMenu = collection.getMenuTree();

/*    collection.url = url;
    collection.setUrlRoot(url);
    collection.fetch();
*/
    _(menu).each(function(menu_items){
        var model = new BS.menu.model.Model(menu_items)
        collection.add(model);
    });

    var app = new BS.menu.view.AppView({
        el: $("#content"),
        collection: collection
    });

    return this;
}
