define(['backbone', 'handlebars', 'model/Colonnes', 'model/Colonne', 'hbs!../templates/board'],
  function(Backbone, Handlebars, Colonnes, Colonne, template){

var vueSurLaMer = Backbone.View.extend({

  el: "#board",
  colonnes: new Colonnes(),

  initialize: function() {
    this.colonnes.reset();
  },

  render: function() {
    this.$el.html(template({title: "mon board"}));
    return this;
  }

});

return vueSurLaMer;
});
