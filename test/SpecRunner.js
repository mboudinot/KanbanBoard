require.config({
  baseUrl: "..",
  paths: {
    jquery: "src/js/lib/jquery",
    backbone: "src/js/lib/backbone",
    handlebars: "src/js/lib/handlebars",
    lodash: "src/js/lib/lodash.compat",
    hbs: "src/js/lib/require-handlebars-plugin/hbs",
    colonnesController: "src/js/controller/ColonnesController",
    colonnes: "src/js/model/Colonnes",
    jasmine: "test/lib/jasmine-2.3.4/jasmine",
    "jasmine-html": "test/lib/jasmine-2.3.4/jasmine-html",
    boot: "test/lib/jasmine-2.3.4/boot"
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
    }
  }
});

var specs = [
  "test/controller/ColonnesControllerSpec"
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
