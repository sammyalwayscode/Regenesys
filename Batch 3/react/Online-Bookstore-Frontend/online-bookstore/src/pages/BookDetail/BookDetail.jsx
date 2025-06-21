import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../component/Header";
import moment from "moment";

const BookDetail = () => {
  const { bookid } = useParams();
  console.log(bookid);
  const [myBookDetails, setMyBookDetail] = useState({});

  const singleBookGet = async () => {
    const res = await axios.get(
      `https://onlinebook-lb9p.onrender.com/api/store/singlebook/${bookid}`
    );
    setMyBookDetail(res.data.data);
  };

  useEffect(() => {
    singleBookGet();
  }, []);

  console.log(myBookDetails);

  return (
    <>
      <Header />
      <div className="  px-10">
        <div>
          <img className=" w-96" src={myBookDetails?.avatar} alt="" />
        </div>
        <h1>{myBookDetails?.title}</h1>
        <b>{myBookDetails?.author}</b> |<i> {myBookDetails?.ISBN} </i> |{" "}
        <small>{moment(myBookDetails?.createdAt).fromNow()}</small>
        <p> {myBookDetails?.summary} </p>
        <Link to="/bookstore">
          <button
            type="button"
            className="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-purple-700 rounded-lg focus:ring-4 focus:ring-purple-200  hover:bg-purple-800"
          >
            Go Back
          </button>
        </Link>
      </div>
    </>
  );
};

export default BookDetail;
