import { describe, expect, it } from 'vitest';
import { SortedList } from './sorted-list';
import { listToArray } from '@/utils/list';

describe.skip('SortedList', () => {
  it('should insert element and keep it sorted', () => {
    const list = new SortedList();

    list.insert(222);
    list.insert(111);
    list.insert(333);
    list.insert(222);
    list.insert(444);
    list.insert(777);
    list.insert(666);

    const listArr = listToArray(list.head);
    const expected = [111, 222, 222, 333, 444, 666, 777];

    expect(listArr).toEqual(expected);
    expect(list.size()).toBe(expected.length);
  });

  it('should remove element from the list', () => {
    const list = new SortedList();

    list.insert(111);
    list.insert(222);
    list.insert(333);
    list.insert(222);
    list.insert(444);
    list.insert(777);
    list.insert(666);

    expect(list.remove(111)).toBe(true);
    expect(list.remove(333)).toBe(true);
    expect(list.remove(555)).toBe(false);
    expect(list.remove(777)).toBe(true);

    const listArr = listToArray(list.head);
    const expected = [222, 222, 444, 666];

    expect(listArr).toEqual(expected);
    expect(list.size()).toBe(expected.length);
    expect(list.head.data).toBe(222);
    expect(list.tail.data).toBe(666);
  });
});
