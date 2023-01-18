import React, { useContext } from "react";
import { MyContext } from "../../App";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
  const myCart = useContext(MyContext);
  const { cart, setCart } = myCart;
  const handleRemoveFromCart = (selectedItem) => {
    const rest = cart.filter((cartItem) => cartItem.id !== selectedItem.id);
    setCart(rest);
  };

  return (
    <div className="md:mt-40 mt-20 min-h-screen md:ml-20 ml-5 md:mr-20 mr-5">
      {cart.map((cartItem) => (
        <CartItem
          key={cartItem.id}
          cartItem={cartItem}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
      <button
        className={
          cart.length > 0
            ? "w-[250px] h-[50px] bg-[#025] hover:bg-[#f80] mt-10 font-serif font-semibold text-[#ff0000] hover:text-white rounded-md text-lg"
            : "hidden"
        }
      >
        Proceed To payment
      </button>
    </div>
  );
};

export default Cart;
