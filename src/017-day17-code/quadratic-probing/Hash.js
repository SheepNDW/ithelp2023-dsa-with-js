class Node {
  constructor(name, data) {
    this.name = name;
    this.data = data;
    this.next = null;
    this.state = true;
  }
}

class Hash {
  constructor() {
    /** @type {Node[]} */
    this.table = [];
    this.capacity = 100; // 容量
    this.length = 0;
  }

  hash(s) {
    // your code here
  }

  getHash(key, capacity) {
    // your code here
  }

  size() {
    return this.length;
  }

  insert(key, value) {
    // your code here
  }

  find(key, cb) {
    // your code here
  }

  get(key) {
    // your code here
  }

  remove(key) {
    // your code here
  }

  forEach(cb) {
    // your code here
  }
}

export { Hash };
