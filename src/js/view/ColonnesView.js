define(['backbone', 'handlebars', 'model/Colonnes', 'model/Colonne'],
  function(Backbone, Handlebars, Colonnes, Colonne){

var vueSurLaMer = Backbone.View.extend({

  //model : Colonnes,
  colonnes: new Colonnes(),

  initialize: function() {
    this.colonnes.reset();
  },

  add: function(nb) {
    for (var i = 0; i < nb; i++) {
      var colonne = new Colonne({titre:'colonne' + i});
      this.colonnes.add(colonne);
    }
  }

});

return vueSurLaMer;
});
