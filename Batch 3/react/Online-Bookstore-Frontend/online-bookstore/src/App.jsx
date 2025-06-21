import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import SignUp from "./pages/auth/signup/SignUp";
import SignIn from "./pages/auth/signin/SignIn";
import Bookstore from "./pages/Bookstore/Bookstore";
import BookDetail from "./pages/BookDetail/BookDetail";
import CreateBook from "./pages/CreateBook";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/bookstore" element={<Bookstore />} />
          <Route path="/detail/:bookid" element={<BookDetail />} />
          <Route path="/createbook" element={<CreateBook />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
