import React from 'react';
import add, { sub, div, mul } from './CalcOperator';
function Calculator() {
  return (
    <>
      <ul>
        <li> Sum of two Number is {add(5, 7)} </li>
        <li> Mul of two Number is {mul(10, 2)} </li>
        <li> Sub of two Number is {sub(5, 2)} </li>
        <li> Div of two Number is {div(40, 3)} </li>
      </ul>
    </>
  );
}

export default Calculator;
