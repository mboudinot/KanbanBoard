define(['backbone'], function(Backbone){

  var Colonne = Backbone.Model.extend({

    defaults: {
      titre : 'colonne vide';
    },

    initialize: function(){

    }
  });

  return Colonne;
});
