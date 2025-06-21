import React, { useEffect, useState } from "react";
import "./Bookstore.css";
// import mysignimage from "../../assets/hero.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "../../component/Header";

const Bookstore = () => {
  const [books, setBook] = useState([]);

  console.log(books);

  const fetchBooks = async () => {
    const res = await axios.get(
      "https://onlinebook-lb9p.onrender.com/api/store/allbooks"
    );
    setBook(res.data.data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);
  return (
    <div className="book_container">
      <Header />
      <section className="Bookstore_Title">
        <h1>Explore the world of Books</h1>
        <p>
          Beautiful, modern sign up designs, illustrations, and graphic elements
        </p>
      </section>
      <section className="card_section">
        {books.map((mydata, i) => (
          <div className="card" key={i}>
            <Link to={`/detail/${mydata._id}`}>
              <div className="card_image">
                <img src={mydata.avatar} alt="" />
              </div>
            </Link>
            <section className="name_title_hold">
              <div className="user_first_name"> {mydata.title.charAt()} </div>
              <div className="book_title_name">
                <p> {mydata.title} </p>
                <div> {mydata.author} </div>
              </div>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Bookstore;
