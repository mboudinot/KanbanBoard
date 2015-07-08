define(['backbone', 'model/Colonne'], function(Backbone, Colonne){

  var ColonneCollection = Backbone.Collection.extend({

    model: Colonne
    add: function() {

        this.add(new Colonne())
    }

  });

  return ColonneCollection;
});
