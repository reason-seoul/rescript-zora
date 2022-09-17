// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Zora from "../src/Zora.mjs";
import * as Zora$1 from "zora";

function wait(amount) {
  return new Promise((function (resolve, param) {
                setTimeout((function (param) {
                        resolve(undefined);
                      }), amount);
              }));
}

Zora$1.test("Some Parallel Tests", (function (t) {
        var state = {
          contents: 0
        };
        t.test("parallel 1", (function (t) {
                return Zora.then(wait(10), (function (param) {
                              t.equal(state.contents, 1, "parallel 2 should have incremented by now");
                              state.contents = state.contents + 1 | 0;
                              t.equal(state.contents, 2, "parallel 1 should increment");
                              return Zora.done(undefined);
                            }));
              }));
        t.test("parallel 2", (function (t) {
                t.equal(state.contents, 0, "parallel 2 should be the first to increment");
                state.contents = state.contents + 1 | 0;
                t.equal(state.contents, 1, "parallel 2 should increment");
                return Zora.done(undefined);
              }));
        t.test("parallel 3", (function (t) {
                return wait(20).then(function (param) {
                            t.equal(state.contents, 2, "parallel 1 and 2 should have incremented by now");
                            state.contents = state.contents + 1 | 0;
                            t.equal(state.contents, 3, "parallel 3 should increment last");
                            return Zora.done(undefined);
                          });
              }));
        return Zora.done(undefined);
      }));

export {
  wait ,
}
/*  Not a pure module */
