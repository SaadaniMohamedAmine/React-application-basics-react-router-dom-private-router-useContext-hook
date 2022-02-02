import { useState } from "react";
import bookList from "../utils/books.js";

const useFetch = () => {
  const [books, setBooks] = useState(bookList);
  return books;
};
export default useFetch;
