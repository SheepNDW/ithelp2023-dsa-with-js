import { describe, expect, it } from 'vitest';
import { hotPotato } from './hotPotato';

describe.skip('hot potato', () => {
  it('should return the winner of the pass game', () => {
    const participants = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];
    const num = 7;

    expect(hotPotato(participants, num)).toBe('John');
  });
});
