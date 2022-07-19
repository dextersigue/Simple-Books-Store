import React, { useContext } from "react";
import { Context } from "../context/Context";
import { Link } from "react-router-dom";

const Book = ({ bookDetails }) => {
  const { addCart } = useContext(Context);
  const {
    id,
    title,
    cover_image,
    price,
    author_id,
    authorName,
    pages,
    releaseDate,
    isbn
  } = bookDetails;

  const handleAddCart = () => {
    addCart(id);
  };

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex flex-column my-2">
      <div className="cover-img">
        <img src={cover_image} alt="" />
        <div className="details">
          <div className="content">
            <h5>
              <Link style={{ color: "#fff" }} to={"/book/details/" + id}>
                {title}
              </Link>
            </h5>
            <h6>
              By{" "}
              <Link style={{ color: "#fff" }} to={"/author/" + author_id} >
               {authorName}
              </Link>
            </h6>
            <h6>
            Pages{" "}
            <Link style={{ color: "#fff" }} to={"/pages/"}>
             {pages}
            </Link>
            </h6>
            <h6>
            Release Date{" "}
            <Link style={{ color: "#fff" }} to={"/releaseDate/"}>
             {releaseDate}
            </Link>
            </h6>
            <h6>
            Isbn{" "}
            <Link style={{ color: "#fff" }} to={"/pages/"}>
             {isbn}
            </Link>
            </h6>
            <h4>Price: ${price}</h4>
          </div>
        </div>
      </div>

      <div className="bottom">
        <Link className="btn btn-outline-primary" to={"/book/details/" + id}>
          Details
        </Link>
        <button onClick={handleAddCart} className="btn btn-outline-primary">
          Add Cart
        </button>
      </div>
    </div>
  );
};

export default Book;
