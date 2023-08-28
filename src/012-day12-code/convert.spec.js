import { describe, expect, it } from 'vitest';
import { decimalToBinary, convertDecimalToBase } from './convert';

describe.skip('decimalToBinary', () => {
  const testCases = [
    [0, '0'],
    [1, '1'],
    [2, '10'],
    [3, '11'],
    [4, '100'],
    [5, '101'],
    [6, '110'],
    [7, '111'],
    [8, '1000'],
    [9, '1001'],
    [10, '1010'],
  ];

  testCases.forEach(([input, expected]) => {
    it(`should convert ${input} to binary ${expected}`, () => {
      expect(decimalToBinary(input)).toBe(expected);
    });
  });
});

describe.skip('convertDecimalToBase', () => {
  const baseCases = {
    binary: [
      [0, '0'],
      [1, '1'],
      [2, '10'],
      [10, '1010'],
    ],
    octal: [
      [0, '0'],
      [1, '1'],
      [2, '2'],
      [8, '10'],
      [9, '11'],
      [10, '12'],
      [15, '17'],
      [16, '20'],
      [1024, '2000'],
    ],
    hexadecimal: [
      [0, '0'],
      [1, '1'],
      [2, '2'],
      [8, '8'],
      [9, '9'],
      [10, 'A'],
      [15, 'F'],
      [255, 'FF'],
      [256, '100'],
      [500, '1F4'],
      [1024, '400'],
    ],
  };

  const baseNameToBaseValue = {
    binary: 2,
    octal: 8,
    hexadecimal: 16,
  };

  Object.keys(baseCases).forEach((baseName) => {
    const baseValue = baseNameToBaseValue[baseName];
    describe(`Base: ${baseName.toUpperCase()} (Value: ${baseValue})`, () => {
      baseCases[baseName].forEach(([input, expected]) => {
        it(`should convert ${input} to ${baseName} as ${expected}`, () => {
          expect(convertDecimalToBase(input, baseValue)).toBe(expected);
        });
      });
    });
  });
});
