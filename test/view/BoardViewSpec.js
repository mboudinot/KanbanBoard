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
      // var $boardTitle = $(boardView.$el.find("#boardTitle"));
      // expect($boardTitle.text()).toEqual("mon board");
    });
  });


});
