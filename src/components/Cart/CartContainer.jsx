import React from "react";
import CartCard from "./CartCard";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const showCart = useSelector((state) => state.isShowCart);
  const cartItems = useSelector((state) => state.items);
  const totalPrice = useSelector((state) => state.totalPrice);

  return (
    <>
      {showCart && (
        <section className="absolute top-[66px] right-[108px] max-h-[500px] min-w-[300px] overflow-y-scroll text-white bg-[#33645e] p-2 text-center">
          <div>
            <div className="text-[20px]">
              {cartItems.length > 0 ? "Cart Items" : "No items In the Cart"}
            </div>
            <div className="flex flex-col justify-center">
              {cartItems.map((item) => {
                return <CartCard item={item} key={item.id} />;
              })}
            </div>
            {cartItems.length > 0 ? (
              <div>
                <span>Total Price:  ${totalPrice.toFixed(2)}</span>
              </div>
            ):""}
          </div>
        </section>
      )}
    </>
  );
};

export default CartContainer;
