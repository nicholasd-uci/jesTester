const { test, expect } = require("@jest/globals")

const greeting = () => {
    return "Hello World!"
}

test(`Greeting should be "Hello World!"`, () => {
    expect(greeting()).toBe('GoodBye World!')
})

test('Returned value should be typed string', () => {
    expect(typeof greeting()).toBe('string')
})

test('Return string should not be empty', () => {
    expect(greeting().length).toBeGreaterThan(0)
})
