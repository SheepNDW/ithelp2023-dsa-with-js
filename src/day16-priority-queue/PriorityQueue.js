import { swap } from '@/utils/sortTestUtils';

class PriorityQueue {
  heap = [];

  push() {}

  pop() {}

  peek() {
    return this.heap[0];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  toString() {
    return this.heap.toString();
  }
}

class MinPriorityQueue extends PriorityQueue {
  constructor() {
    super();
  }

  push(el) {}

  pop(el) {}
}

export { PriorityQueue, MinPriorityQueue };
