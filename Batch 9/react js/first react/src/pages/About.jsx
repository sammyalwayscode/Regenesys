import { useEffect, useState } from "react";
import "./Page.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement } from "../state/CounterSlice";

const About = () => {
  const [myData, setMyData] = useState([]);

  console.log(myData);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setMyData(data));
  }, []);

  const dispatch = useDispatch();
  const stateCountValue = useSelector((state) => state.counter.value);

  return (
    <div>
      <h1>
        {stateCountValue}
        This is the About Page{" "}
        <button onClick={() => dispatch(decrement())}>Decrease</button>{" "}
      </h1>
      <section>
        {myData.map((item, index) => (
          <main className="apiCard" key={index}>
            <h3>Title: {item.title}</h3>
            <p>Body: {item.body}</p>
          </main>
        ))}
      </section>
    </div>
  );
};

export default About;
