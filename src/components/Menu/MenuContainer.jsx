import React from "react";
import img1 from "../../assets/images/cart-images/img1.webp";
import img2 from "../../assets/images/cart-images/img2.webp";
import img3 from "../../assets/images/cart-images/img3.webp";
import img4 from "../../assets/images/cart-images/img4.webp";
import img5 from "../../assets/images/cart-images/img5.webp";
import img6 from "../../assets/images/cart-images/img6.webp";
import MenuCard from "./MenuCard";

const menuItems = [
  { id: "m1", img: img1, quantity: 1, name: "Whooper", price: 10.9 },
  { id: "m2", img: img2, quantity: 1, name: "Double Whooper", price: 20.9 },
  { id: "m3", img: img3, quantity: 1, name: "Bacon King", price: 7.3 },
  { id: "m4", img: img4, quantity: 1, name: "Cheese Crooisan", price: 11.3 },
  { id: "m5", img: img5, quantity: 1, name: "Single Mix n Match", price: 17.3 },
  {
    id: "m6",
    img: img6,
    quantity: 1,
    name: "Fully Loaded Crooisan",
    price: 18.3,
  },
];

const MenuContainer = () => {
  return (
    <main className="py-[30px]">
      <section className="max-w-[1280px] mx-auto">
        <h1 className="text-[35px] text-center">Cart Items</h1>
        <div className="flex flex-wrap justify-center items-center gap-x-[10px] gap-y-[10px] p-2">
          {menuItems.map((item) => {
            return <MenuCard key={item.id} item={item} />;
          })}
        </div>
      </section>
    </main>
  );
};

export default MenuContainer;
