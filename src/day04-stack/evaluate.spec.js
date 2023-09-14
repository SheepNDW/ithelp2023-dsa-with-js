import { describe, expect, it } from 'vitest';
import { evaluate } from './evaluate';

describe.skip('evaluate', () => {
  it('should evaluate the expression correctly', () => {
    const s = '12*(3+4)-6+8/1';
    const result = evaluate(s);
    expect(result).toBe(86);

    const s2 = '5*(2+3)-10/2';
    const result2 = evaluate(s2);
    expect(result2).toBe(20);

    const s3 = '8/(4-2)*0';
    const result3 = evaluate(s3);
    expect(result3).toBe(0);

    const s4 = '10+(3+7)*2';
    const result4 = evaluate(s4);
    expect(result4).toBe(30);
  });
});
