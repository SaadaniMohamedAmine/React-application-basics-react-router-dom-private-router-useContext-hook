import React from "react";
import useFetch from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const BookReview = () => {
  const { isbn } = useParams();
  const book = useFetch();
  const data = book.find((book) => book.isbn === isbn);
  return (
    <div className="container">
      <Helmet>
        <title>Book : {data.title}</title>
      </Helmet>
      <div className="card mb-3 my-5 mx-auto" style={{ maxWidth: "95%" }}>
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={data.thumbnailUrl}
              className="img-fluid rounded-start d-block mx-auto py-3"
              alt="..."
              style={{ width: "250px", height: "100%" }}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title text-center text-muted py-3 my-3">
                {data.title}
              </h3>
              <div className="bg-dark text-light p-3">
                <h6>Author: {data.authors.join("-")}</h6>
                <h6>Categories: {data.categories.join("-")}</h6>
                <h6>Number page: {data.pageCount}</h6>
                <h6>Status: {data.status}</h6>
                <h6>
                  Publish on date:{" "}
                  {data.publishedDate["$date"].toString().substr(0, 20)}
                </h6>
              </div>
              <p className="mt-3">{data.shortDescription}</p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookReview;
