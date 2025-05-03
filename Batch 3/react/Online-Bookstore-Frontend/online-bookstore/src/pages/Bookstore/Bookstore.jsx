import React, { useEffect, useState } from "react";
import "./Bookstore.css";
// import mysignimage from "../../assets/hero.jpg";
import axios from "axios";

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
      <header>
        <img src="./orange.png" alt="Logo" />
        <section className="btn_section">
          <button>LogOut</button>
          <div className="first_letter">A</div>
        </section>
      </header>
      <section className="Bookstore_Title">
        <h1>Explore the world of Books</h1>
        <p>
          Beautiful, modern sign up designs, illustrations, and graphic elements
        </p>
      </section>
      <section className="card_section">
        {books.map((mydata, i) => (
          <div className="card" key={i}>
            <div className="card_image">
              <img src={mydata.avatar} alt="" />
            </div>
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
