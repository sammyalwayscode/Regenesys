import { useState } from "react";
import { useSelector } from "react-redux";

const Services = () => {
  const [counter, setCounter] = useState(0);
  const [showBall, setShowBall] = useState(false);

  const getFromState = useSelector((state) => state.counter.date);

  console.log(counter);
  const increaseCount = () => {
    setCounter(counter + 1);
  };

  const decreaseCount = () => {
    setCounter(counter - 1);
  };

  const touggleBall = () => {
    setShowBall(!showBall);
  };

  console.log(showBall);

  return (
    <div>
      <h1>{counter} Users Present</h1>
      <button onClick={increaseCount}>Increase User</button>
      <button onClick={decreaseCount}>Decrease User</button>

      {showBall ? <div className="ball"></div> : null}
      <button onClick={touggleBall}>show ball</button>

      <h1>From the State Store {getFromState}</h1>
    </div>
  );
};
export default Services;
