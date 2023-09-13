import React from "react";
import { useState } from "react";

function Item({ name, category, selectedCategory }) {
  const [addedToCart, setCart] = useState("");

  function handleClick(){
    setCart(preValue => preValue === "" ? "in-cart" : "");
  }
  function checkCategory(){}

  return (
    <li className={addedToCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleClick} className="add">
        {addedToCart === "" ? "Add To Cart" : "In Cart"}</button>
    </li>
  );
}

export default Item;
