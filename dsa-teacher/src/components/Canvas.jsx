import { AnimatePresence } from "framer-motion";
import Node from "./Node";

const Canvas = ({ data = [], type }) => {
  return (
    <div className="canvas">
      <div className={type === "stack" ? "stack" : "row"}>
        {data.map((v, i) => (
          <div className="node" key={i}>{v}</div>
        ))}
      </div>
    </div>
  );
};

export default Canvas;
