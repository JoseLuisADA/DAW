import fizzBuzz from '../src/fizzbuzz.js';

test('Should return 1 for 1', () => {
  expect(fizzBuzz(1)).toBe(1);
});

test('Should return fizz for 3', () => {
  expect(fizzBuzz(3)).toBe('fizz');
});

test('Should return buzz for 5', () => {
  expect(fizzBuzz(5)).toBe('buzz');
});

test('Should return fizzbuzz for 15', () => {
  expect(fizzBuzz(15)).toBe('fizzbuzz');
});