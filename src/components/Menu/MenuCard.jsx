import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/index";

const MenuCard = ({ item }) => {
  const dispatch = useDispatch();

  const handleAdditemsToCart = (item,quantity) => {
    dispatch(cartActions.addItemToCart(item,quantity));
  };
  return (
    <div className="flex flex-col gap-y-[20px] border rounded-[12px] justify-center items-center font-semibold py-[40px] px-[20px] lg:px-[50px] shadow-lg">
      <div className="w-[300px]">
        <img src={item.img} alt="image" className="w-full" />
      </div>
      <div className="flex justify-around gap-x-[40px]">
        <h3 className="text-[18px]">{item.name}</h3>
        <h4 className="text-[16px] bg-[#290944] p-1 text-white rounded-[8px]">
          ${item.price}
        </h4>
      </div>
      <div>
        <button
          className="border p-1 py-[8px] px-[80px] transition-al l bg-[#290944] text-white hover:bg-transparent hover:text-black rounded-[8px]"
          onClick={() => handleAdditemsToCart(item,1)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default MenuCard;
