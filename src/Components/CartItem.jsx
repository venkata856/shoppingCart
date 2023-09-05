import { useContext } from "react";
import { ShopContext } from "../Context/shop-context";

function CartItem(props) {
  const { title, thumbnail, price, quantity, id } = props.products;
  const { updateCart, incrementItems, decrementItems } =
    useContext(ShopContext);
  return (
    <div className="cart-item">
      <div className="cartImageContainer">
        <img className="cartImage" src={thumbnail}></img>
      </div>
      <div className="cartDataContainer">
        <h4 className="cartItemTitle">{title}</h4>
        <h2 className="cartItemPrice">${price}</h2>
        <div className="updateButtons">
          <button
            onClick={() => {
              decrementItems(id);
            }}
          >
            {" "}
            -{" "}
          </button>
          <input
            className="quantity"
            value={quantity}
            onChange={(e) => updateCart(id, Number(e.target.value))}
          ></input>
          <button
            onClick={() => {
              incrementItems(id);
            }}
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
