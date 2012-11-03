backbone-tree
=============

This backbone plugin that override Backbone.sync to return the data from a json tree created at the client side, replacing the default ajax request


Example
=============
The example folder contains an practical application of the plugin. The example consist in a menu with sub-menus at the views that are generated usign the models fetched usign the new sync method of the collection.

The sync method of the collection returns the results from a json tree structured with a format like that:

```javascript

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


```


TODO list
=============

The next step for this project is to refactor the code and override the sync prototype of Backbone.

