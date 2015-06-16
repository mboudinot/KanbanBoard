define(['jasmineJquery','backbone', 'boardView'], function(jasmineJquery, Backbone, BoardView) {
  describe("board view test", function() {

    var boardView;

    beforeEach(function () {
      setFixtures("<div id='trello'><div id='board'></div></div>");
      boardView = new BoardView();
    });

    it("should display title",function() {
      // Given

      // When
      boardView.render();

      // Then
      expect($("#boardTitle").text()).toEqual("mon board");
    });


    it ("add button" , function() {
      // Given

      // When
      boardView.render();

      //then
      expect($("#addColonne")).toBeVisible();

    });

    it ("should display 3 colonnes", function() {
      // Given

      // When
      boardView.render();

      //then
      expect($(".colonne").length).toEqual(3);
    });

    it ("should display columns with titles", function() {
      // Given

      // When
      boardView.render();

      //then
      var colonneTitle = $(".colonne > .titre");
      expect($(colonneTitle[0]).text()).toEqual("Je sais pas");
      expect($(colonneTitle[1]).text()).toEqual("Je sais pas");
      expect($(colonneTitle[2]).text()).toEqual("Je suis un blaireau et je m'appelle issame");
    });
  });


});
