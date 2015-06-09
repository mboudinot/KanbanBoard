define(['jasmineJquery','backbone', 'boardView'], function(jasmineJquery, Backbone, BoardView) {
  describe("board view test", function() {

	jasmineJquery.getFixtures().read("<div id='clubmed'></div>");
  	var board = new BoardView();

  	it("should display title",function() {
	  	board.render();

	  	expect($("#boardTitle").text()).toBe("mon board");
  	});
  });

  
});