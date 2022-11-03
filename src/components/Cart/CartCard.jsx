import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useDispatch } from "react-redux";
import { cartActions } from "../../store/index";
const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemoveItemFromCart = (item) => {
    dispatch(cartActions.removeItemFromCart(item));
  };
  const handleAdditemsToCart = (item, quantity) => {
    dispatch(cartActions.addItemToCart(item, quantity));
  };
  const handleRemoveItemQtyFromCart = (item, quantity) => {
    dispatch(cartActions.removeItemQtyFromCart(item, quantity));
  };
  return (
    <div className="flex items-center  gap-x-[10px] p-[10px] border-b-[2px] ">
      <img src={item.img} alt="image" className="w-[75px] h-[75px]" />
      <div className="flex">
        <div className="flex flex-col gap-y-[5px] w-[185px] items-start">
          <h4>{item.name}</h4>
          <span>Qty:{item.quantity}</span>
          <div className="flex gap-x-[10px]">
            <AiOutlineMinus
              className="cursor-pointer"
              onClick={() => handleRemoveItemQtyFromCart(item, 1)}
            />
            <AiOutlinePlus
              className="cursor-pointer"
              onClick={() => handleAdditemsToCart(item, 1)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-[5px]">
          <span>${item.price.toFixed(2)}</span>
          <button
            className="border py-[1px] px-[20px] transition-all bg-[#290944] text-white hover:bg-transparent hover:text-black rounded-[8px]"
            onClick={() => handleRemoveItemFromCart(item)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
