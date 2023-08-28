import { Queue } from './Queue';

/**
 * Returns the winner of the hot potato.
 * @param {Array<string>} participants
 * @param {number} num
 * @return {string}
 */
function hotPotato(participants, num) {
  const queue = new Queue();
  participants.forEach((item) => queue.enqueue(item));

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }
    console.log(`${queue.dequeue()} 被淘汰了`);
  }

  return queue.dequeue();
}

export { hotPotato };
