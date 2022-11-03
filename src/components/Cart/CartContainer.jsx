import React from "react";
import CartCard from "./CartCard";
import img1 from "../../assets/images/cart-images/img1.webp";

const cartItems = [
  { id: "c1", img: img1, itemName: "Whooper", price: "$10.9", quantity: 1 },
  { id: "c2", img: img1, itemName: "Whooper", price: "$10.9", quantity: 1 },
  { id: "c2", img: img1, itemName: "Whooper", price: "$10.9", quantity: 1 },
  { id: "c2", img: img1, itemName: "Whooper", price: "$10.9", quantity: 1 },
  { id: "c2", img: img1, itemName: "Whooper", price: "$10.9", quantity: 1 },
  { id: "c2", img: img1, itemName: "Whooper", price: "$10.9", quantity: 1 },
  { id: "c2", img: img1, itemName: "Whooper", price: "$10.9", quantity: 1 },
  {
    id: "c3",
    img: img1,
    itemName: " Double Whooper",
    price: "$10.9",
    quantity: 1,
  },
];

const CartContainer = () => {
  return (
    <section className="absolute hidden top-[66px] right-[108px] max-h-[500px] min-w-[300px] overflow-y-scroll text-white bg-[#33645e] p-2 text-center">
      <div>
        <div className="text-[20px]">Cart Items</div>
        <div className="flex flex-col justify-center">
          {cartItems.map((item) => {
            return <CartCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default CartContainer;
