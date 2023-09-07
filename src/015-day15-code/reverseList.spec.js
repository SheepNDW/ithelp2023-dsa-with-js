import { describe, expect, it } from 'vitest';
import { reverseList } from './reverseList';
import { createList, listToArray } from '@/utils/list';

describe.skip('reverseList', () => {
  it('should reverse a linked list', () => {
    const list = createList([1, 2, 3, 4, 5]);
    const reversedList = reverseList(list.head);
    const reversedListArr = listToArray(reversedList);
    const expected = [5, 4, 3, 2, 1];

    expect(reversedListArr).toEqual(expected);
  });
});
