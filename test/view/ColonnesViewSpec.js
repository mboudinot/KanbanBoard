define(['backbone', 'colonnesView', 'colonnes'], function(Backbone, ColonnesView, Colonnes) {
  describe("colonne view test", function() {
    var colonnesView;

    beforeEach(function() {
      colonnesView = new ColonnesView();
    });

    it("création d'une colonne", function() {
      //Given

      //When
      colonnesView.add(1);

      //Then
      expect(colonnesView.colonnes.size()).toBe(1);
    });

    it("création de 5 colonnes", function() {
      //Given

      //When
      colonnesView.add(5);

      //Then
      expect(colonnesView.colonnes.size()).toBe(5);
    });

    it("création de 2 colonnes", function() {
      //Given
      colonnesView = new ColonnesView();
      //When
      colonnesView.add(2);

      //Then
      expect(colonnesView.colonnes.size()).toBe(2);
    });

    
  });
});
