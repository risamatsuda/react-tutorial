import React, { useState, useEffect } from 'react';

const App = () => {
  const [time, setTime] = useState(25 * 60); // 25分を秒に変換
  const [isActive, setIsActive] = useState(false);

  // カウントダウン処理
  useEffect(() => {
    let interval = null;
    // カウントダウンが開始されている場合、かつ時間が0より大きい場合
    if (isActive && time > 0) {
      // 1秒ごとにtimeを1減らす
      interval = setInterval(() => {
        setTime(time => time - 1);
      }, 1000);
    } else if (time === 0) {
      // カウントダウンが終了したら、カウントダウンを停止する
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, time]);

  // カウントダウンを開始する関数
  const countDown = () => {
    setIsActive(!isActive);
  };

  // 時間のフォーマットを変換する関数
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  // カウントダウンのリセット
  const reset = () => {
    setTime(25 * 60);
    setIsActive(false);
  };

  return (
    <>
      <h1>{formatTime(time)}</h1>
      <h2>{isActive? '作業中' : '' }</h2>
      <button onClick={countDown}>{isActive ? '⏸' : '▶' }</button>
      <button onClick={reset}>■</button>
    </>
  );
}

export default App;