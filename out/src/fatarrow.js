System.registerModule("../../src/fatarrow.js", [], function() {
  "use strict";
  var __moduleName = "../../src/fatarrow.js";
  var array = [1, 2, 3, 4, 5];
  console.log(array.filter((function(num) {
    return num % 2 == 0;
  })).map((function(num) {
    return num * num;
  })).every((function(num) {
    return num % 4 == 0;
  })));
  return {};
});
System.get("../../src/fatarrow.js" + '');
