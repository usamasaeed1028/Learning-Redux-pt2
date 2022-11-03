import React from "react";
import { BsMinecart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/index";

const Header = () => {
  const totalItems = useSelector((state) => state.quantity);
  const dispatch = useDispatch();

  const handleShowCart = () => {
    dispatch(cartActions.showCart())
  }
  
  return (
    <header className="bg-[#290944]">
      <div className="max-w-[1280px] mx-auto flex justify-between items-center">
        <h1 className="text-white text-[30px] py-[10px]">Redux Cart</h1>
        <div>
          <BsMinecart className="text-white text-[20px] cursor-pointer relative" onClick={handleShowCart} />
          <span className="absolute text-[12px] top-[8px]  w-[20px] h-[20px] flex justify-center items-center border border-black rounded-full text-white">
            {totalItems}
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
