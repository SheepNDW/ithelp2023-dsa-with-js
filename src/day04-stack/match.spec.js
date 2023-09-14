import { describe, expect, it } from 'vitest';
import { match } from './match';

describe.skip('match', () => {
  it('should return true for matching brackets', () => {
    const s = '{[()]()[{}]}';
    expect(match(s)).toBe(true);
  });

  it('should return false for not matching brackets', () => {
    const s = '{[(])}';
    expect(match(s)).toBe(false);
  });
});
