import React from "react";
import useFetch from "../hooks/useFetch";
import Book from "./Book";
import { Helmet } from "react-helmet";

const Books = () => {
  const books = useFetch();
  return (
    <div>
      <Helmet>
        <title>Book List</title>
      </Helmet>
      <div className="container my-5">
        <div className="row g-5">
          {books.map((book) => (
            <Book book={book} key={book.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
