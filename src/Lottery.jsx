import React, { useState } from "react";
import "./Lottery.css";

function Lottery(props) {
  const [nums, setNums] = useState(Array.from({ length: props.balls }));

  function handleClick() {
    const rand = Array.from(
      { length: props.balls },
      () => Math.floor(Math.random() * props.maxNum) + 1
    );
    setNums([...rand]);
    console.log(rand);
  }

  return (
    <div className="Lottery">
      <h1>{props.title}</h1>

      {nums.map((num) => {
        return (
          <div className="Lottery-number">
            <h3 className="number">{num}</h3>
          </div>
        );
      })}

      <button onClick={handleClick}>Generate</button>
    </div>
  );
}

export default Lottery;
