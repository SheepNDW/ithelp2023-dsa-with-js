import { describe, expect, it } from 'vitest';
import { hello } from './hello';

describe.skip('hello', () => {
  it('should return a greeting', () => {
    const result = hello('World');
    expect(result).toBe('Hello World!');
  });
});
