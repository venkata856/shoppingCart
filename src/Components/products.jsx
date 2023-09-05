import { NavLink, useLoaderData, useNavigation } from "react-router-dom";
import { useContext } from "react";
import "./products.css";
import { ShopContext } from "../Context/shop-context";

function Products() {
  const data = useLoaderData();
  const navigation = useNavigation();
  const { addToCart, isItemExists } = useContext(ShopContext);

  if (navigation.state === "loading") {
    return <div className="loader"></div>;
  }

  return (
    <div className="products">
      {data.map((da) => (
        <div className="singleProduct" key={da.id}>
          <NavLink to={`/shop/${da.id}`}>
            <img
              className="product-image"
              src={da.thumbnail}
              alt="some image"
            ></img>
          </NavLink>
          <div className="product-details">
            <h5 className="productName">{da.title}</h5>
            <h5 className="productPrice">${da.price}</h5>
          </div>
          <button
            className="addToCart"
            disabled={isItemExists(da.id)}
            onClick={() => addToCart({ ...da, quantity: 1 })}
          >
            Add To Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export const productsData = async () => {
  const resp = await fetch("https://dummyjson.com/products");
  const products = await (await resp.json()).products;

  return products;
};

export default Products;
