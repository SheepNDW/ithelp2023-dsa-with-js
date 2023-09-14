class DoublyNode {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyList {
  constructor() {}

  size() {}

  clear() {}

  isEmpty() {}

  getHead() {}

  getTail() {}

  findIndex(index) {}

  forEach(cb) {}

  insertAt(index, data) {}

  removeAt(index) {}
}

export { DoublyNode, DoublyList };
