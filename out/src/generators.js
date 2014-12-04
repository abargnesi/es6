System.registerModule("../../src/generators.js", [], function() {
  "use strict";
  var $__2 = $traceurRuntime.initGeneratorFunction(numbers);
  var __moduleName = "../../src/generators.js";
  function numbers() {
    var i;
    return $traceurRuntime.createGeneratorInstance(function($ctx) {
      while (true)
        switch ($ctx.state) {
          case 0:
            i = 0;
            $ctx.state = 9;
            break;
          case 9:
            $ctx.state = (true) ? 1 : -2;
            break;
          case 1:
            $ctx.state = 2;
            return i;
          case 2:
            $ctx.maybeThrow();
            $ctx.state = 4;
            break;
          case 4:
            i += 1;
            $ctx.state = 9;
            break;
          default:
            return $ctx.end();
        }
    }, $__2, this);
  }
  var array = [];
  for (var $__0 = numbers()[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    var num = $__1.value;
    {
      if (num == 1000)
        break;
      console.log(num);
      array.push(num);
    }
  }
  return {};
});
System.get("../../src/generators.js" + '');
