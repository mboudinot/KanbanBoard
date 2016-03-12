define(['backbone', 'handlebars', 'model/ColonneCollection', 'model/Colonne', 'hbs!../templates/board', 'hbs!../templates/colonne'],
  function(Backbone, Handlebars, ColonneCollection, Colonne, template, colonneTemplate){

var BoardView = Backbone.View.extend({
    el: "#board",

    events: {
      "click #addColumn": "addColumn",
      "click .kb-button-removeColumn": "removeColumn",
      "change .kb-input-title": "modifyColumnTitle"
    },

    initialize: function() {
      this.model = new ColonneCollection();
      this.render();
      for (i=0; i<3; i++) {
        this.addColumn();
      }
    },

    render: function() {
      this.$el.html(template({title: "Mon board"}));
      return this;
    },

    addColumn: function() {
      var columnCount = this.$('#colonneList .colonne').length;

      this.model.add(new Colonne());
      this.$('#colonneList').append(colonneTemplate({
          columnNumber: columnCount + 1
      }));
    },

    removeColumn: function(e) {
      $(e.target).closest("div").remove();
    },

    modifyColumnTitle: function(e) {
    	$(e.target).parent().find("h1").html($(e.target).val());
    	$(e.target).val("");
    }

  });

  return BoardView;
});
