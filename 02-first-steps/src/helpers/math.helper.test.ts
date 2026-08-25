import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

test('Should add two numbers', () => {
    const a = 1;
    const b = 2;

    const result = add(a, b);

    expect(result).toBe(a + b);
});

describe('subtract', () => {
    test('Should be 0', () => {
        const a = 5;
        const result = subtract(a, a);
        expect(result).toBe(0);
    });
    test('Should subtract two numbers', () => {
        const a = 10;
        const b = 9;
        const result = subtract(a, b);
        expect(result).toBe(a - b);
    });
});
describe('multiply', () => {
    test('Should be 0', () => {
        const a = 5;
        const result = multiply(a, 0);
        expect(result).toBe(0);
    });
    test('Should multiply two numbers', () => {
        const a = 10;
        const b = 9;
        const result = multiply(a, b);
        expect(result).toBe(a * b);
    });
});