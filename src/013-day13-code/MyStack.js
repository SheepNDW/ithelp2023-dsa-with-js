import { Queue } from './Queue';

class MyStack {
  queue1 = new Queue();
  queue2 = new Queue();

  push(x) {
    this.queue2.enqueue(x);

    while (!this.queue1.isEmpty()) {
      this.queue2.enqueue(this.queue1.dequeue());
    }

    [this.queue1, this.queue2] = [this.queue2, this.queue1];
  }

  pop() {
    return this.queue1.dequeue() ?? null;
  }

  top() {
    return this.queue1.front() ?? null;
  }

  empty() {
    return this.queue1.isEmpty();
  }
}

export { MyStack };
