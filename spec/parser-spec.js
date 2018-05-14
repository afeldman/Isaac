var parser = require('../lib/parser/all');


describe("parserfile", function () {
  it("line by line parser", function () {
    var product = parser.parse('../test_data/ERRALL.LS');
    expect(product).toBe(6);
  });
});    
