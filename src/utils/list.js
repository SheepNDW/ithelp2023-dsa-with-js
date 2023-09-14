import { List } from '@/day07-linked-list/LinkedList';

function listToArray(head) {
  const result = [];
  let current = head;

  while (current !== null) {
    result.push(current.data);
    current = current.next;
  }

  return result;
}

function createList(arr) {
  const list = new List();

  for (let i = 0; i < arr.length; i++) {
    list.insertAt(i, arr[i]);
  }

  return list;
}

function compareLists(list1, list2) {
  while (list1 && list2) {
    if (list1.data !== list2.data) return false;
    list1 = list1.next;
    list2 = list2.next;
  }

  return list1 === null && list2 === null;
}

export { listToArray, createList, compareLists };
