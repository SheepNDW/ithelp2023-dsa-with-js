import { describe, expect, it } from 'vitest';
import { DoublyList } from './DoublyLinkedList';

describe.skip('DoublyLinkedList', () => {
  it('should create empty linked list', () => {
    const list = new DoublyList();
    expect(list).toBeDefined();
    expect(list.size()).toBe(0);
    expect(list.getHead()).toBeNull();
    expect(list.getTail()).toBeNull();
  });

  it('should insert data at head', () => {
    const list = new DoublyList();

    list.insertAt(0, 100);

    expect(list.size()).toBe(1);
    expect(list.getHead().data).toBe(100);

    list.insertAt(0, 200);

    expect(list.size()).toBe(2);
    expect(list.getHead().data).toBe(200);
    expect(list.getTail().data).toBe(100);
  });

  it('should insert data at tail', () => {
    const list = new DoublyList();

    list.insertAt(0, 100);

    expect(list.size()).toBe(1);
    expect(list.getTail().data).toBe(100);

    list.insertAt(1, 200);

    expect(list.size()).toBe(2);
    expect(list.getTail().data).toBe(200);
  });

  it('should insert data at middle', () => {
    const list = new DoublyList();

    list.insertAt(0, 100);
    list.insertAt(1, 200);
    list.insertAt(1, 300);

    expect(list.size()).toBe(3);
    expect(list.findIndex(1).data).toBe(300);
  });

  it('should remove data at head', () => {
    const list = new DoublyList();

    list.insertAt(0, 100);
    list.insertAt(1, 200);
    list.insertAt(2, 300);

    const removedItem = list.removeAt(0);

    expect(removedItem).toBe(100);
    expect(list.size()).toBe(2);
    expect(list.getHead().data).toBe(200);
    expect(list.getTail().data).toBe(300);
  });

  it('should remove data at tail', () => {
    const list = new DoublyList();

    list.insertAt(0, 100);
    list.insertAt(1, 200);
    list.insertAt(2, 300);

    list.removeAt(2);

    expect(list.size()).toBe(2);
    expect(list.getHead().data).toBe(100);
    expect(list.getTail().data).toBe(200);
  });

  it('should remove data at middle', () => {
    const list = new DoublyList();

    list.insertAt(0, 100);
    list.insertAt(1, 200);
    list.insertAt(2, 300);

    list.removeAt(1);

    expect(list.size()).toBe(2);
    expect(list.getHead().data).toBe(100);
    expect(list.getTail().data).toBe(300);
  });

  it('should iterate over list', () => {
    const list = new DoublyList();

    list.insertAt(0, 100);
    list.insertAt(1, 200);
    list.insertAt(2, 300);
    list.insertAt(3, 400);
    list.insertAt(2, 500);

    const iteratedList = [];

    list.forEach((el) => iteratedList.push(el));

    expect(iteratedList).toEqual([100, 200, 500, 300, 400]);
  });
});
