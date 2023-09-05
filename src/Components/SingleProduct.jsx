import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import fullStar from "../assets/star-icon.svg";
import emptyStar from "../assets/emptystar.svg";

import "./singleProduct.css";

function SingleProduct() {
  const data = useLoaderData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handelPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const handelNext = () => {
    const isLastSlide = currentIndex === data.images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToProductsPage = () => {
    navigate("/shop");
  };
  function goToSlide(slideIndex) {
    setCurrentIndex(slideIndex);
  }

  return (
    <div className="item">
      <div className="navigationButtons">
        <div className="close" onClick={goToProductsPage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="30"
            height="30"
            viewBox="0 0 50 50"
          >
            <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
          </svg>
        </div>
      </div>
      <div className="details">
        <div className="itemDetails">
          <h1 className="singleTitle">
            {data.brand} {data.title} {data.description}
          </h1>
          <div className="ratings">
            {[...Array(5)].map((x, i) =>
              i < data.rating ? (
                <img className="star" key={i} src={fullStar} alt="fullStar" />
              ) : (
                <img className="star" key={i} src={emptyStar} alt="Star" />
              )
            )}
          </div>
          <h5 className="price">${data.price}</h5>
          <h6 className={data.stock > 0 ? "available" : "notAvailable"}>
            {data.stock > 0 ? "In Stock" : "Out of Stock"}
          </h6>
        </div>
        <div className="ImageContainer">
          <div className="left" onClick={handelPrev}>
            &#x21e6;
          </div>
          <div className="right" onClick={handelNext}>
            &#x21e8;
          </div>
          <img className="picture" src={data.images[`${currentIndex}`]}></img>
          <div className="imageDots">
            {data.images.map((slide, slideIndex) => (
              <div
                className="dots"
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
              >
                ●
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export const loadSingleProduct = async ({ params }) => {
  const response = await fetch(`https://dummyjson.com/products/${params.id}`);
  const single = await response.json();
  return single;
};

export default SingleProduct;
