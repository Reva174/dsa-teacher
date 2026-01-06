import { useState } from "react";

const useQueue = () => {
  const [items, setItems] = useState([]);

  const enqueue = (value) => {
    setItems((prev) => [...prev, value]);
  };

  const dequeue = () => {
    setItems((prev) => prev.slice(1));
  };

  return { items, enqueue, dequeue };
};

export default useQueue;
