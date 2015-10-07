'use strict'

var test = require('tape')
var isCssRoot = require('..')

test('is-css-root', function (t) {
  t.plan(2)

  t.ok(isCssRoot(':root'))
  t.ok(!isCssRoot('.root'))
})
