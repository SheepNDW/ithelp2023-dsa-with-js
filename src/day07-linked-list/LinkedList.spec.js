import { describe, expect, it } from 'vitest';
import { List } from './LinkedList';
import { listToArray } from '@/utils/list';

describe.skip('List', () => {
  it('should create an empty list', () => {
    const list = new List();
    expect(list).toBeDefined();
    expect(list.length).toBe(0);
    expect(list.head).toBeNull();
  });

  it('should insert an element at a given position in the list', () => {
    const list = new List();
    list.insertAt(0, 1);
    list.insertAt(1, 2);
    list.insertAt(2, 3);
    list.insertAt(3, 4);
    list.insertAt(2, 5);

    const listArr = listToArray(list.head);
    const expected = [1, 2, 5, 3, 4];

    expect(listArr).toEqual(expected);
  });

  it('it should throw an error if the index is out of range', () => {
    const list = new List();
    list.insertAt(0, 1);
    list.insertAt(1, 2);
    list.insertAt(2, 3);

    const invalidInsert = () => list.insertAt(10, 4);

    expect(invalidInsert).toThrowError('10 超過 list 長度 3');
  });

  it('should remove the element at the specified position in this list', () => {
    const list = new List();
    list.insertAt(0, 1);
    list.insertAt(1, 2);
    list.insertAt(2, 3);
    list.insertAt(3, 4);

    list.removeAt(1);

    const listArr = listToArray(list.head);
    const expected = [1, 3, 4];

    expect(listArr).toEqual(expected);
  });
});
