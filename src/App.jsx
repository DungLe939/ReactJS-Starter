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

export default function App() {

  const MyComponent = () => {
    return (
      <h1>Hello World, Day la dung</h1>
    );
  }

  return (
    <MyComponent />
  );
} 
