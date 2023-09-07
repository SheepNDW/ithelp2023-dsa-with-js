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

// import { mergeSort } from '@/007-day7-code/MergeSort';

// const arr = [3, 4, 9, 1, 8, 2, 0, 7, 6, 5];
// mergeSort(arr);

import { List } from '@/015-day15-code/LinkedList';
import { SortedList } from '@/016-day16-code/sorted-list';

const list = new SortedList();

list.insert(222);
list.insert(111);
list.insert(333);
list.insert(555);
list.insert(444);
list.insert(777);
list.insert(666);

console.log(list);
