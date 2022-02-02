import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-12 px-2">
      <div className="card" style={{ width: "15rem" }}>
        <img
          src={book.thumbnailUrl}
          className="card-img-top image-fluid"
          alt="..."
          height="200"
          width="250"
        />
        <div
          className="card-body bg-dark text-light"
          style={{ minHeight: "200px" }}
        >
          <h5
            className="card-title border-bottom text-center pb-3"
            style={{ fontSize: "0.75em" }}
          >
            {book.title}
          </h5>
          <p className="card-text">
            {book.shortDescription
              ? book.shortDescription.substr(1, 75)
              : "A beautifully written book that is a must have for every Java Developer. random"}
          </p>
          <Link to={`/books/${book.isbn}`} className="btn btn-secondary">
            More details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Book;
