System.registerModule("../../src/module-def.js", [], function() {
  "use strict";
  var __moduleName = "../../src/module-def.js";
  var local = 666;
  var sadPanda = "womp, womp";
  return {get sadPanda() {
      return sadPanda;
    }};
});
System.registerModule("../../src/module-import.js", [], function() {
  "use strict";
  var __moduleName = "../../src/module-import.js";
  var sadPanda = System.get("../../src/module-def.js").sadPanda;
  console.log("Imported sadPanda, value: ", sadPanda);
  return {};
});
System.get("../../src/module-import.js" + '');
