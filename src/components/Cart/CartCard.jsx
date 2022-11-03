import React from "react";

const CartCard = ({ item }) => {
  return (
    <div className="flex items-center  gap-x-[10px] p-[10px] border-b-[2px] ">
      <img src={item.img} alt="image" className="w-[75px] h-[75px]" />
      <div className="flex">
        <div className="flex flex-col w-[185px] items-start">
          <h4>{item.itemName}</h4>
          <span>Qty:{item.quantity}</span>
        </div>
        <span>{item.price}</span>
      </div>
    </div>
  );
};

export default CartCard;
