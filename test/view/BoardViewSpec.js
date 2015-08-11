define(['jasmineJquery','backbone', 'boardView'], function(jasmineJquery, Backbone, BoardView) {
  describe("board view test", function() {

    var boardView;

    beforeEach(function () {
      setFixtures("<div id='trello'><div id='board'></div></div>");
      boardView = new BoardView();

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
        expect(boardView.model.length).toEqual(4);
      });

      it ("should add removeButton" , function() {
        //When
        $("#addColumn").click();

        var $lastColumn = $(".colonne" ).last();
        // Then
        expect($lastColumn.find("button.kb-button-removeColumn").length).toEqual(1);

      });
    });

    xdescribe("modify column title", function() {
      it("should modify title when input changed", function() {
        // Given

        // When
        $(".colonne");
        // Then
      });
    });

    describe("remove Column", function() {
      it ("should remove first column when clicked" , function() {
        //When
        $(".kb-button-removeColumn")[0].click();

        // Then
        expect($("#colonneList .colonne").length).toEqual(2);
      });
    });

    it ("should display 3 colonnes", function() {
      // Then
      expect($(".colonne").length).toEqual(3);
    });

    it ("should display columns with titles tip", function() {
      // Then
      var colonneTitle = $(".colonne > .kb-column-titre input");
      expect($(colonneTitle[0]).attr("placeholder")).toEqual("titre de la colonne");
      expect($(colonneTitle[1]).attr("placeholder")).toEqual("titre de la colonne");
      expect($(colonneTitle[2]).attr("placeholder")).toEqual("titre de la colonne");
    });
  });


});
