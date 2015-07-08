define(['backbone', 'handlebars', 'model/ColonneCollection', 'model/Colonne', 'hbs!../templates/board', 'hbs!../templates/colonne'],
  function(Backbone, Handlebars, ColonneCollection, Colonne, template, colonneTemplate){

var BoardView = Backbone.View.extend({
    el: "#board",

    model: new ColonneCollection(),

    events: {
      "click #addColumn": "addColumn",
      "click .removeColumn": "removeColumn"
    },

    initialize: function() {
      this.render();
      for (i=0; i<3; i++) {
        this.addColumn();
      }
    },

    render: function() {
      this.$el.html(template({title: "mon board"}));
      return this;
    },

    addColumn: function() {
      colonneTemplate();
      this.model.add();
      this.$('#colonneList').append(colonneTemplate());
    },

    removeColumn: function(e) {
      $(e.target).closest("div").remove();
    },

    modifyColumnTitle: function(e) {
      $(e.target).closest("div").remove();
    }

  });

  return BoardView;
});
