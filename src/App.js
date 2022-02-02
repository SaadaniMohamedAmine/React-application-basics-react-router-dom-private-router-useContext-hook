import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navigate from "./components/Navigate";
import Home from "./components/Home";
import Features from "./components/Features";
import Error from "./components/Error";
import Login from "./components/Login";
import Register from "./components/Register";
import PrivateRoute from "./route-config/PrivateRoute";
import AuthContext from "./hooks/authContext";
import Books from "./components/Books";
import BookReview from "./components/BookReview";

const App = () => {
  const [auth, setAuth] = useState(false);
  const login = () => {
    setAuth(!auth);
  };
  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ status: auth, login }}>
        <Navigate />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/books" element={<Books />} />
          <Route path="books/:isbn" element={<BookReview />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<PrivateRoute />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  );
};

export default App;
