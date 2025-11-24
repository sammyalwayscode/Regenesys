import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { increment } from "../state/CounterSlice";

const Contact = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>This is the Contact Page</h1>
      <Link to="/services">
        <button>Go to services</button>
      </Link>
      <section>
        <h2>State Management Test</h2>
        <h1> {count} </h1>
        <button onClick={() => dispatch(increment())}>Increase Count</button>
      </section>
    </div>
  );
};

export default Contact;
