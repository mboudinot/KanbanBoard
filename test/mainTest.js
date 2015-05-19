require.config({
    paths: {
        jquery: "../lib/jquery",
        backbone: "../lib/backbone",
        handlebars: "../lib/handlebars",
        lodash: "../lib/lodash.compat",
        hbs: "../lib/require-handlebars-plugin/hbs",
        colonnesController: "../controller/ColonnesController",
        colonnes: "../model/Colonnes"
    },
    map: {
        // Backbone et Backbone-Associations ont une dépendence à 'underscore' (en réalité on utilise Lodash)
        backbone: {
            underscore: "lodash"
        },
        "backbone-associations": {
            underscore: "lodash"
        }
    },
    shim: {
        jquery: {
            exports: "$"
        }
    }
});

requirejs(["lib/jasmine-2.2.0/jasmine",
            "lib/jasmine-2.2.0/jasmine-html",
            "lib/jasmine-2.2.0/boot",
            "controller/ColonnesControllerSpec"]);

