import test from 'ava'
import isCssRoot from './'

test('is-css-root', t => {
  t.plan(2)

  t.true(isCssRoot(':root'))
  t.false(isCssRoot('.root'))
})
