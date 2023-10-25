import test from 'ava';

test('Should be 1 for n = 1', t => {
    const result = fizzBuzz(1);
    t.is(result, 1);
});

const expectedResults = {
    1: 1,
    2: 2,
    3: 'fizz',
    4: 4,
    5: 'buzz',
    15: 'fizzbuzz',
    30: 'fizzbuzz',
    35: 'buzz'
};

Object.entries(expectedResults).forEach(([number, expectedResults]) => {
    test(`Should be ${expectedResults} for n = ${number}`, t =>{
        const result = fizzBuzz(parseInt(number));
        t.is(result, expectedResult);
    })
});