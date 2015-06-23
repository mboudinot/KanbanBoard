define(['backbone', 'handlebars', 'model/Colonnes', 'model/Colonne', 'hbs!../templates/board', 'hbs!../templates/colonne'],
  function(Backbone, Handlebars, Colonnes, Colonne, template, colonneTemplate){

var BoardView = Backbone.View.extend({
    el: "#board",
    colonnes: new Colonnes(),

    events: {
      "click #addColumn": "addColumn",
      "click #removeColumn": "removeColumn"
    },

    initialize: function() {
      this.colonnes.reset();
    },

    render: function() {
      this.$el.html(template({title: "mon board"}));
      return this;
    },

    addColumn: function() {
      colonneTemplate();
      this.$('#colonneList').append(colonneTemplate());
    },

    removeColumn: function() {
      this.$('#colonneList .colonne').last().remove();
    }

  });

  return BoardView;
});
