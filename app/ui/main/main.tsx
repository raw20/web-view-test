"use client";

import { useState } from "react";

export default function Main() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div className="my-8 flex justify-center items-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        알림 전송
      </button>
      <p className="ml-6">알림 횟수 : {count}</p>
    </div>
  );
}
