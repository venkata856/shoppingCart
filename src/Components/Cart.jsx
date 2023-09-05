import { useContext } from "react";
import { ShopContext } from "../Context/shop-context";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import "./cart.css";

function Cart() {
  const { cartItems, getTotalCartAmount, checkOut } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      {cartItems.map((item) => (
        <CartItem products={item} />
      ))}
      {totalAmount > 0 ? (
        <div className="CheckOut">
          <p className="total">SubTotal ${totalAmount}</p>
          <button className="shopping" onClick={() => navigate("/shop")}>
            Continue Shopping
          </button>
          <button
            className="CheckOutButton"
            onClick={() => {
              checkOut();
              navigate("/checkout");
            }}
          >
            Checkout
          </button>
        </div>
      ) : (
        <h1>Your Cart is Empty</h1>
      )}
    </div>
  );
}

export default Cart;
