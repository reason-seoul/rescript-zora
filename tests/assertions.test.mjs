// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Zora from "../src/Zora.mjs";
import * as Zora$1 from "zora";
import * as Caml_option from "../node_modules/rescript/lib/es6/caml_option.js";

Zora$1.test("Test assertions", (function (t) {
        t.equal(42, 42, "Numbers are equal");
        t.notEqual(42, 43, "Numbers are not equal");
        var x = {
          hello: "world"
        };
        var z = {
          hello: "world"
        };
        t.is(x, x, "object is object");
        t.is(x, x, "object is object");
        t.isNot(x, z, "object is not object with same values");
        t.equal(x, z, "Object is deep equal");
        t.ok(true, "boolean is ok");
        t.notOk(false, "boolean is not ok");
        Zora.optionNone(t, undefined, "None is None");
        Zora.optionSome(t, Caml_option.some(x), (function (t, n) {
                t.equal(n.hello, "world", "option should be hello world");
              }));
        Zora.resultError(t, {
              TAG: /* Error */1,
              _0: x
            }, "Is Error Result");
        Zora.resultOk(t, {
              TAG: /* Ok */0,
              _0: x
            }, (function (t, n) {
                t.equal(n.hello, "world", "Is Ok Result");
              }));
        return Zora.done(undefined);
      }));

export {
  
}
/*  Not a pure module */
