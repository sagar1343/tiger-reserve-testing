import { useState } from "react";

function Counter({ date, count, setCount, max_count }) {
  if (!date) max_count = 0;
  const increment = () =>
    setCount((prevCount) =>
      prevCount >= max_count ? prevCount : prevCount + 1
    );
  const decrement = () =>
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));

  return (
    <div className="flex gap-2 items-center">
      <span
        onClick={decrement}
        className="text-white size-8 bg-black hover:bg-black/60 flex justify-center items-center rounded-full cursor-pointer"
      >
        -
      </span>
      {count}
      <span
        onClick={increment}
        className="text-white size-8 bg-black hover:bg-black/60 flex justify-center items-center rounded-full cursor-pointer"
      >
        +
      </span>
    </div>
  );
}

export default Counter;
