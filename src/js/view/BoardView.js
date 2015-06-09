define(['backbone', 'handlebars', 'colonnes', 'colonne', ''], 
  function(Backbone, Handlebars, Colonnes, Colonne, Board){

var vueSurLaMer = Backbone.View.extend({

  //model : Colonnes,
  //template : Handlebars.compile(board),
  colonnes: new Colonnes(),

  initialize: function() {
    this.colonnes.reset();
  },

  render: function() {
    //this.$el.html(this.template());
  }

});

return vueSurLaMer;
});
