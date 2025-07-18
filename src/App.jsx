import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "./redux/counter/counterSlice";
import styles from './styles/Counter.module.css';
import MyComponent from './components/learn/MyComponent';



export default function App() {
  return (
    <>
      <MyComponent/>
    </>
  );
} 
