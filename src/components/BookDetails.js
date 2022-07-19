import React, { useContext } from "react";
import { Context } from "../context/Context";
import { useParams, Link } from "react-router-dom";

const BookDetails = () => {
  const { id } = useParams();
  const { addCart, books } = useContext(Context);

  const book = books.filter(book => book.id == id);
  const {
    title,
    cover_image,
    releaseDate,
    price,
    pages,
    authorName,
    author_id,
    isbn
  } = book[0];

  

  const handleAddCart = () => {
    addCart(id);
  };

  return (
    <div className="container">
      <h1 className="display-4 text-center">Book Details</h1>
      <div className="book-details w-75 my-4 mx-auto">
        <div className="row">
          <div className="book-img col-lg-5 col-12">
            <img className="w-100 h-60" src={cover_image} alt="" />
          </div>
          <div className="contents col-lg-7 col-12">
           <h1 className="text-muted ml-0">{title}</h1>
            <h4>
              By: <Link to={"/author/" + author_id}>{authorName}</Link>
            </h4>
            <h6>
              Pages:  {pages}
            </h6>
            <h6>
             Release Date: {releaseDate} 
            </h6>
            <h6>
            Isbn: {isbn}
            </h6>
            <h4>Price: ${price}</h4>
            <button
              style={{ fontSize: "1.3rem" }}
              className="btn btn-outline-primary px-5 py-3 m-auto"
              onClick={handleAddCart}
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
