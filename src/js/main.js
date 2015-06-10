require.config({
    paths: {
        jquery: "lib/jquery",
        backbone: "lib/backbone",
        handlebars: "lib/handlebars",
        lodash: "lib/lodash.compat",
        hbs: "lib/require-handlebars-plugin/hbs",
        BoardView: "view/BoardView"
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

if (!window.jasmine) {
    require(["jquery", "BoardView"], function ($, BoardView) {
            "use strict";

            var boardView = new BoardView();

            boardView.render();
    })
};


