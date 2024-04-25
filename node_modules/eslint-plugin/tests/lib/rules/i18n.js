/**
 * @fileoverview test
 * @author yansheng
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/i18n"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("i18n", rule, {

    valid: ["function test(d, e, f) {}"],

    invalid: [
        {
            code: "function test(a, b, c, d) {}",
            errors: [{
                message: "参数最多不能超过3个,i18n测试",
            }]
        }
    ]
});
