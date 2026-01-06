import { useState } from "react";

const useArray = () => {
  const [items, setItems] = useState([]);

  const add = (value) => {
    setItems((prev) => [...prev, value]);
  };

  const remove = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return { items, add, remove };
};

export default useArray;
