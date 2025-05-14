"use client";
import React, { useEffect, useState } from 'react';

function Stopwatch() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  let interval;

  useEffect(() => {
    if (isRunning) {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  }

  const stopTimer = () => {
    setIsRunning(false);
  }

  const resetTimer = () => {
    stopTimer();
    setSeconds(0);
  }

  return (
    <div>
      <h1>Time: {seconds}s</h1>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

export default Stopwatch;