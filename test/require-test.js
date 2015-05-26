var tape = require("tape"),
    path = require("path"),
    requirejs = require("requirejs");

tape("can load as AMD module", function(test) {
  delete global.d3;
  requirejs([path.join(__dirname, "../node_modules/d3-selection/d3-selection")], function(d3) {
    requirejs([path.join(__dirname, "../d3-selection-multi")], function() {
      test.equal(typeof d3.selection.prototype.attrs, "function");
      test.end();
      delete global.d3;
    });
  });
});

tape("can load as minified AMD module", function(test) {
  delete global.d3;
  requirejs([path.join(__dirname, "../node_modules/d3-selection/d3-selection.min")], function(d3) {
    requirejs([path.join(__dirname, "../d3-selection-multi.min")], function() {
      test.equal(typeof d3.selection.prototype.attrs, "function");
      test.end();
      delete global.d3;
    });
  });
});