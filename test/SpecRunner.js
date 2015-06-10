require.config({
  baseUrl: "../src/js",
  paths: {
    jquery: "lib/jquery",
    backbone: "lib/backbone",
    lodash: "lib/lodash.compat",
    templates: "../templates/",
    handlebars: "lib/handlebars",
    hbs: "lib/require-handlebars-plugin/hbs",
    boardView: "view/BoardView",
    // colonnesView: "view/ColonnesView",
    // colonnes: "model/Colonnes",
    // colonne: "model/Colonne",
    jasmine: "../../test/lib/jasmine-2.3.4/jasmine",
    "jasmine-html": "../../test/lib/jasmine-2.3.4/jasmine-html",
    boot: "../../test/lib/jasmine-2.3.4/boot",
    jasmineJquery: "../../test/lib/jasmine-jquery"
  },
  map: {
    // Backbone et Backbone-Associations ont une dépendence à 'underscore' (en réalité on utilise Lodash)
    backbone: {
      underscore: "lodash"
    },
    "backbone-associations": {
      underscore: "lodash"
    },
  },
  shim: {
    jquery: {
      exports: "$"
    },
    "jasmine": {
        exports: "window.jasmineRequire"
    },
    "jasmine-html": {
      deps: ["jasmine"],
      exports: "window.jasmineRequire"
    },
    "boot": {
      deps: ["jasmine", "jasmine-html"],
      exports: "window.jasmineRequire"
    },
    "jasmineJquery": {
      deps: ["jasmine", "jquery"],
      exports: "jasmineJquery"
    }
  }
});

var specs = [
  "../../test/view/ColonnesViewSpec",
  "../../test/view/BoardViewSpec"
  ];

// Load Jasmine - This will still create all of the normal Jasmine browser globals unless `boot.js` is re-written to use the
// AMD or UMD specs. `boot.js` will do a bunch of configuration and attach it's initializers to `window.onload()`. Because
// we are using RequireJS `window.onload()` has already been triggered so we have to manually call it again. This will
// initialize the HTML Reporter and execute the environment.
require(["boot"], function () {

  // Load the specs
  require(specs, function () {

    // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
    window.onload();

  });
});
