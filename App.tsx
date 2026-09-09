import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>カウント: {count}</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        ＋増やす
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        −減らす
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        リセット
      </button>
    </div>
  );
}

export default Counter;
