import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateUser from "./pages/CreateUser";
import Header from "./static/Header";
import UserDetail from "./pages/UserDetail";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details" element={<UserDetail />} />
          <Route path="/createusers" element={<CreateUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
