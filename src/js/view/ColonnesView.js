define(['backbone','colonnes', 'colonne'], function(Backbone, Colonnes, Colonne){

var vueSurLaMer = Backbone.View.extend({

  //model : Colonnes,

  colonnes: new Colonnes(),

  initialize: function() {
    this.colonnes.reset();
  },

  add: function(nb) {
    for (var i = 0; i < nb; i++) {
      var colonne = new Colonne({titre:'colonne'});
      this.colonnes.add(colonne);
    }
  }

});

return vueSurLaMer;
});
