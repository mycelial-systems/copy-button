import { test } from '@substrate-system/tapzero'
import { CopyButton as html } from '../src/html.js'

// Node-only test for string rendering

test('CopyButton html rendering', t => {
    const classes = ['foo', 'bar']
    const result = html(classes)
    t.ok(result.includes('class="foo bar copy-button"'), 'should render correct class')
    t.ok(result.includes('<button'), 'should render a button')
})

test('CopyButton html rendering with no classes', t => {
    const result = html([])
    t.ok(result.includes('class="copy-button"'), 'should render with only default class')
})

// ============================================
// HINT ATTRIBUTE TESTS
// ============================================

test('html module generates popover with hint string', t => {
    const result = html({ hint: 'Copied!' })
    t.ok(result.includes('popover'), 'should include popover attribute')
    t.ok(result.includes('Copied!'), 'should include hint text')
    t.ok(result.includes('role="status"'), 'should include role attribute')
    t.ok(result.includes('aria-live="polite"'), 'should include aria-live attribute')
    t.ok(result.includes('copy-hint'), 'should include copy-hint class')
})

test('html module with boolean hint uses default text', t => {
    const result = html({ hint: true })
    t.ok(result.includes('Copied'), 'should use default "Copied" text')
    t.ok(result.includes('popover'), 'should include popover attribute')
})

test('html module backwards compatible with array argument', t => {
    const result = html(['my-class'])
    t.ok(result.includes('my-class'), 'should support array argument for classes')
    t.ok(!result.includes('popover'), 'should not include popover without hint')
})

test('html module with classes and hint', t => {
    const result = html({ classes: ['custom-class'], hint: 'Done!' })
    t.ok(result.includes('custom-class'), 'should include custom class')
    t.ok(result.includes('Done!'), 'should include custom hint text')
    t.ok(result.includes('popover'), 'should include popover')
})

test('html module with empty string hint uses default', t => {
    const result = html({ hint: '' })
    // Empty string should be treated as truthy for hint presence
    // but should use default text
    t.ok(result.includes('popover'), 'should include popover for empty hint')
    t.ok(result.includes('Copied'), 'empty hint should use default "Copied" text')
})
