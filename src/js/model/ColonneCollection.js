define(['backbone', 'model/Colonne'], function(Backbone, Colonne){

  var ColonneCollection = Backbone.Collection.extend({

    model: Colonne

  });

  return ColonneCollection;
});
