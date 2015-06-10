define(['backbone', 'model/Colonne'], function(Backbone, Colonne){

  var Colonnes = Backbone.Collection.extend({model: Colonne});

  return Colonnes;
});
