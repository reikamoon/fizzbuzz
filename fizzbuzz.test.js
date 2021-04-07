const fb = require('./fizzbuzz')

test('isFizzy', () => {
 expect(fb.isFizzy(3)).toBe(true)
 expect(fb.isFizzy(2)).toBe(false)
})

test('isBuzzy', () => {
    expect(fb.isBuzzy(10)).toBe(true)
    expect(fb.isBuzzy(3)).toBe(false)
})

test('fizzyBuzzy', () => {
    expect(fb.fizzyBuzzy(10)).toBe('buzz')
    expect(fb.fizzyBuzzy(15)).toBe('fizzbuzz')
})

test('fizzBuzz', () => {
    expect(fb.fizzBuzz(20)).toStrictEqual({"buzz": 3, "count": 20, "fizz": 5, "fizzBuzz": 1})
})

test('BUZZ', () => {
    expect(fb.BUZZ).toBe('buzz')
})

test('FIZZ', () => {
    expect(fb.FIZZ).toBe('fizz')
})

test('FIZZBUZZ', () => {
    expect(fb.FIZZBUZZ).toBe('fizzbuzz')
})