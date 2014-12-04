System.registerModule("../../src/module-def.js", [], function() {
  "use strict";
  var __moduleName = "../../src/module-def.js";
  var local = 666;
  var sadPanda = "womp, womp";
  return {get sadPanda() {
      return sadPanda;
    }};
});
System.get("../../src/module-def.js" + '');
