import { useState } from "react";
import Canvas from "./Canvas";
import Controls from "./Controls"
import useStack from "../structures/useStack";
import useArray from "../structures/useArray";
import useQueue from "../structures/useQueue";

const Sidebar = ({ structure, setStructure }) => {
  return (
    <aside className="sidebar">
      <h2>Structures</h2>
      <ul>
        {["stack", "array", "queue"].map((item) => (
          <li
            key={item}
            className={structure === item ? "active" : ""}
            onClick={() => setStructure(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
