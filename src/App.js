import React from "react";
import "./styles.css";
import Lottery from "./Lottery";

export default function App() {
  return (
    <div className="App">
      <Lottery title="Mega Millions" balls={6} maxNum={40} />
      <Lottery title="Daily 4" balls={4} maxNum={10} />
      <Lottery
        title="Ultra Ultra Super Mega Millions for Make Benefit Once Great Nation of Kazakhstan"
        balls={100}
        maxNum={1000}
      />
    </div>
  );
}
