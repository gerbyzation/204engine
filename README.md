# animation-engine

This project is generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.1.

## Build & development

Run `grunt` for building and `grunt serve` for preview.

NOTE: for the export functionality you need to run `node server.js` instead of `grunt serve`. You might want to run grunt in parallel if you are developing.

## RUN

To make use of the export button you need to run the node server instead (`node server.js` in the terminal).

As long as the save button is not pressed (which will save into localStorage) it will default to our demo animation.

# Routes
 - `/` for the animation engine
 - `/embed.html` for our sample animation exported into an indepentend html file (images have to be placed in the proper path relative to the file)

## Embedding
You can export an animation from the engine, which will give you a html document with the html element in it. Place it on your website, make sure the assets are placed relative to the html & enjoy!

# Future wishlist
- pause functionality (see `pause` branch, only needs bugfixing)
- easing: linear, curves
- visualising translation paths & manipulate points by dragging (also bezier curves!) + multiple points
- z-index
- change asset order by drag & drop
- reflect effect
- add scenes or groups for the assets
