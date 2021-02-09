const { test, expect } = require('@jest/globals')
const Mather = require('../Mather.js')

test('New mather should be instance of MAther', () => {
    const mather = new Mather(9,4)
    expect(mather).toBeInstanceOf(Mather)
})

test('should add a and b together', () => {
    const mather = newMather(9,4)
    expect(mather.add()).toBe(13)
})

test('should subtract a and b together', () => {
    const mather = newMather(9,4)
    expect(mather.subtract()).toBe(5)
})

test('should multiply a and b together', () => {
    const mather = newMather(9,4)
    expect(mather.subtract()).toBe(36)
})
