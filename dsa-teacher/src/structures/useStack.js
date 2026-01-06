import { useState } from "react";

const useStack = () => {
  const [items, setItems] = useState([]);

  const push = (value) => {
    setItems((prev) => [...prev, value]);
  };

  const pop = () => {
    setItems((prev) => prev.slice(0, -1));
  };

  return { items, push, pop };
};

export default useStack;
