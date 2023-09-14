class Deque {
  #items = {};
  #headCount = 0;
  #count = 0;

  addFront(data) {
    // you code here
  }

  addBack(data) {
    this.#items[this.#count] = data;
    this.#count++;
  }

  removeFront() {
    if (this.isEmpty()) return;
    const head = this.#items[this.#headCount];
    delete this.#items[this.#headCount];
    this.#headCount++;
    return head;
  }

  removeBack() {
    if (this.isEmpty()) return;
    this.#count--;
    const tail = this.#items[this.#count];
    delete this.#items[this.#count];
    return tail;
  }

  peekFront() {
    return this.#items[this.#headCount];
  }

  peekBack() {
    if (this.isEmpty()) return;
    return this.#items[this.#count - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.#count - this.#headCount;
  }

  clear() {
    this.#items = {};
    this.#headCount = 0;
    this.#count = 0;
  }

  toString() {
    let str = '';

    for (let i = this.#headCount; i < this.#count; i++) {
      str += this.#items[i] + (i < this.#count - 1 ? ',' : '');
    }

    return str;
  }
}

export { Deque };
