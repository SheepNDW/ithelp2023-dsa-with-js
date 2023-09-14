class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class List {
  constructor() {}

  size() {}

  isEmpty() {}

  clear() {}

  forEach(cb) {}

  findIndex(index) {}

  insertAt(index, data) {}

  removeAt(index) {}
}

export { Node, List };
