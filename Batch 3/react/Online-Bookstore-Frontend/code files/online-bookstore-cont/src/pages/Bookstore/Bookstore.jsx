import React from "react";
import "./Bookstore.css";
import mysignimage from "../../assets/hero.jpg";

const Bookstore = () => {
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
        <div className="card">
          <div className="card_image">
            <img src={mysignimage} alt="" />
          </div>
          <section className="name_title_hold">
            <div className="user_first_name">A</div>
            <div className="book_title_name">
              <p>Atomic Habbit</p>
              <div>Sammy</div>
            </div>
          </section>
        </div>
        <div className="card">
          <div className="card_image">
            <img src={mysignimage} alt="" />
          </div>
          <section className="name_title_hold">
            <div className="user_first_name">A</div>
            <div className="book_title_name">
              <p>Atomic Habbit</p>
              <div>Sammy</div>
            </div>
          </section>
        </div>
        <div className="card">
          <div className="card_image">
            <img src={mysignimage} alt="" />
          </div>
          <section className="name_title_hold">
            <div className="user_first_name">A</div>
            <div className="book_title_name">
              <p>Atomic Habbit</p>
              <div>Sammy</div>
            </div>
          </section>
        </div>
        <div className="card">
          <div className="card_image">
            <img src={mysignimage} alt="" />
          </div>
          <section className="name_title_hold">
            <div className="user_first_name">A</div>
            <div className="book_title_name">
              <p>Atomic Habbit</p>
              <div>Sammy</div>
            </div>
          </section>
        </div>
        <div className="card">
          <div className="card_image">
            <img src={mysignimage} alt="" />
          </div>
          <section className="name_title_hold">
            <div className="user_first_name">A</div>
            <div className="book_title_name">
              <p>Atomic Habbit</p>
              <div>Sammy</div>
            </div>
          </section>
        </div>
        <div className="card">
          <div className="card_image">
            <img src={mysignimage} alt="" />
          </div>
          <section className="name_title_hold">
            <div className="user_first_name">A</div>
            <div className="book_title_name">
              <p>Atomic Habbit</p>
              <div>Sammy</div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Bookstore;
