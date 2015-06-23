define(['jasmineJquery','backbone', 'boardView'], function(jasmineJquery, Backbone, BoardView) {
  describe("board view test", function() {

    var boardView;

    beforeEach(function () {
      setFixtures("<div id='trello'><div id='board'></div></div>");
      boardView = new BoardView();
      boardView.render();
    });

    it("should display title",function() {
      // Then
      expect($("#boardTitle").text()).toEqual("mon board");
    });

    describe ("addColumn", function(){
      it ("show addColumn button" , function() {
        // Then
        expect($("#addColumn")).toBeVisible();

      });

      it ("click on button adds Column in board view" , function() {
        //When
        $("#addColumn").click();

        // Then
        expect($("#colonneList .colonne").length).toEqual(4);
      });

    });

    describe("removeColumn", function() {
      it ("should remove column when clicked" , function() {
        //When
        $("#removeColumn").click();

        // Then
        expect($("#colonneList .colonne").length).toEqual(2);
      });
    });

    it ("should display 3 colonnes", function() {
      // Then
      expect($(".colonne").length).toEqual(3);
    });

    it ("should display columns with titles", function() {
      // Then
      var colonneTitle = $(".colonne > .titre");
      expect($(colonneTitle[0]).text()).toEqual("Je sais pas");
      expect($(colonneTitle[1]).text()).toEqual("Je sais pas");
      expect($(colonneTitle[2]).text()).toEqual("Je suis un blaireau!!!");
    });
  });


});
