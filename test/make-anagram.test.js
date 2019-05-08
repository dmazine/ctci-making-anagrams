const makeAnagram = require('../src/make-anagram');

test('test case #1', () => {
    expect(makeAnagram('cde', 'abc')).toBe(4);
});

test('test case #2', () => {
    expect(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke')).toBe(30);
});

test('test case #3', () => {
    expect(makeAnagram('showman', 'woman')).toBe(2);
});
