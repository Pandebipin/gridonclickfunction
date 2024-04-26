import "./styles.css";
import { useState } from "react";
export default function App() {
  const [orders, setOrder] = useState([]);
  const config = [
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1],
  ];

  function Cell({ filled, onclick }) {
    return (
      <button
        type="button"
        onClick={onclick}
        className={filled ? "cell cell-activated" : "cell"}
      />
    );
  }
  const deactivateCells = () => {
    setOrder("");
  };

  const setcells = (ind) => {
    const newOrder = [...orders, ind];
    setOrder(newOrder);
    console.log(newOrder);

    if (newOrder.length === config.flat(1).filter(Boolean).length) {
      deactivateCells();
    }
  };
  return (
    <div className="App">
      <div
        className="grid"
        style={{ gridTemplateColumns: `repeat(${config[0].length},1fr)` }}
      >
        {config.flat(1).map((value, ind) => {
          return value ? (
            <Cell
              key={ind}
              filled={orders.includes(ind)}
              onclick={() => setcells(ind)}
            />
          ) : (
            <span></span>
          );
        })}
      </div>
    </div>
  );
}
