import './style.css';
import javascriptLogo from './javascript.svg';
import viteLogo from '/vite.svg';

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>那些前端不用會，<br>但是可以會的資料結構與演算法!</h1>
    <h2>Let's learn about the basics of Data Structures and Algorithms</h2>
  </div>
`;

/**
 * ==== SinglyLinkedList ====
 */
// import { List } from '@/day07-linked-list/LinkedList';

// const list = new List();
// list.insertAt(0, 111);
// list.insertAt(1, 222);
// list.insertAt(1, 333);
// list.insertAt(3, 444);
// list.forEach((el, i) => console.log(el, i));
// try {
//   list.insertAt(8, 333);
// } catch (error) {
//   console.log(error);
// }
// list.removeAt(1);
// list.forEach((el, i) => console.log(el, i));

/**
 * ==== SortedList ====
 */
// import { SortedList } from '@/day08-linked-list2/sorted-list';
// const list = new SortedList();

// list.insert(222);
// list.insert(111);
// list.insert(333);
// list.insert(555);
// list.insert(444);
// list.insert(777);
// list.insert(666);

// console.log(list);

/**
 * ==== CircularLink ====
 */
// import { CircularLink } from '@/day08-linked-list2/CircularLinkedList';

// const list = new CircularLink();

// list.insertAt(0, 111);
// list.insertAt(1, 222);
// list.insertAt(2, 333);
// list.insertAt(1, 444);
// list.insertAt(3, 666);

// list.forEach((el, i) => console.log(el, i));

// list.removeAt(0);
// console.log(list);

/**
 * ==== BST ====
 */
// import { BST } from '@/day13-binary-search-tree/BST';

// const tree = new BST();
// [7, 15, 5, 3, 9, 8, 10, 13, 20, 18, 25].forEach((num) => tree.insert(num));
// console.log(tree.toString());

// tree.show();

/**
 * ==== Merge sort ====
 */
// import { mergeSort } from '@/day20-merge-sort/MergeSort';

// const arr = [3, 4, 9, 1, 8, 2, 0, 7, 6, 5];
// mergeSort(arr);
