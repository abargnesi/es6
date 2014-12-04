System.registerModule("../../src/rest-parameters.js", [], function() {
  "use strict";
  var __moduleName = "../../src/rest-parameters.js";
  function logWithRestParams(logger) {
    var $__1;
    for (var values = [],
        $__0 = 1; $__0 < arguments.length; $__0++)
      values[$__0 - 1] = arguments[$__0];
    ($__1 = logger).log.apply($__1, $traceurRuntime.spread(values));
  }
  logWithRestParams(console, 'hack', 'the', 'planet');
  function logWithDefaultParam(values) {
    var $__1;
    var logger = arguments[1] !== (void 0) ? arguments[1] : console;
    ($__1 = logger).log.apply($__1, $traceurRuntime.spread(values));
  }
  logWithDefaultParam(['hack', 'the', 'planet']);
  return {};
});
System.get("../../src/rest-parameters.js" + '');
