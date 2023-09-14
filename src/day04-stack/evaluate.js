import { Stack } from './Stack';

/**
 * Evaluates the value of an expression
 * @param {string} expression
 * @returns {number}
 */
export function evaluate(expression) {
  // your code here
}

const isDigit = (c) => /[0-9]/.test(c);

// 比較兩個運算符的優先級大小
const precede = (θ1, θ2) => {
  if (θ1 == '+' || θ1 == '-') {
    if (θ2 == '+' || θ2 == '-' || θ2 == ')') {
      return '>';
    } else {
      return '<';
    }
  } else if (θ1 == '*' || θ1 == '/') {
    if (θ2 == '(') {
      return '<';
    } else {
      return '>';
    }
  } else if (θ1 == '(') {
    if (θ2 == ')') {
      return '=';
    } else {
      return '<';
    }
  } else if (θ1 == ')') {
    return '>';
  }
  return '>';
};

// 執行運算
const operate = (opnd1, optr, opnd2) => {
  switch (optr) {
    case '+':
      return opnd1 + opnd2;
    case '-':
      return opnd1 - opnd2;
    case '*':
      return opnd1 * opnd2;
    case '/':
      return opnd1 / opnd2;
  }
  return 0;
};
