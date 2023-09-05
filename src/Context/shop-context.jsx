import { createContext, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = [];
  return cart;
};

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = ({ id, title, price, quantity, thumbnail }) => {
    console.log("inside add to cart");
    setCartItems((prev) => [
      ...prev,
      {
        id: id,
        thumbnail: thumbnail,
        price: price,
        quantity: quantity,
        title: title,
      },
    ]);
    console.log(cartItems);
  };
  const removeFromCart = (id) => {
    setCartItems((prev) => {
      const target = prev.find((value) => value.id === id);
      return [...prev, { ...target, quantity: target.quantity - 1 }];
    });
  };

  const isItemExists = (id) => {
    return cartItems.some((value) => value.id === id);
  };

  const updateCart = (id, newValue) => {
    let items = [...cartItems];
    let targetItem = items.find((value) => value.id === id);
    targetItem.quantity = newValue;

    setCartItems([...items]);
  };

  const incrementItems = (id) => {
    let items = [...cartItems];
    let targetItem = items.find((value) => value.id === id);
    targetItem.quantity = targetItem.quantity + 1;

    setCartItems([...items]);
  };

  const decrementItems = (id) => {
    let items = [...cartItems];
    let targetItem = items.find((value) => value.id === id);
    if (targetItem.quantity > 1) {
      targetItem.quantity = targetItem.quantity - 1;
    } else {
      const index = items.indexOf(targetItem);
      items.splice(index, 1);
    }

    setCartItems([...items]);
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    let target = [...cartItems];
    for (const item of target) {
      totalAmount += Number(item.price) * Number(item.quantity);
    }
    return totalAmount;
  };
  const checkOut = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    isItemExists,
    updateCart,
    incrementItems,
    decrementItems,
    getTotalCartAmount,
    checkOut,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
