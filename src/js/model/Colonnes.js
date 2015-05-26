define(['backbone', 'colonne'], function(Backbone, Colonne){

  var Colonnes = Backbone.Collection.extend({model: Colonne});

  return Colonnes;
});
