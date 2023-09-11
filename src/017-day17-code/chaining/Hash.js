class Node {
  constructor(name, data) {
    this.name = name;
    this.data = data;
    this.next = null;
  }
}

class Hash {
  constructor() {
    /** @type {Node[]} */
    this.table = [];
  }

  hash(key) {
    // your code here
  }

  loopup(key) {
    // your code here
  }

  get(key) {
    // your code here
  }

  remove(key) {
    // your code here
  }

  insert(key, data) {
    // your code here
  }

  forEach(cb) {
    // your code here
  }
}

export { Hash };
