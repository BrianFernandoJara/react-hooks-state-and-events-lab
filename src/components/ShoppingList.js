import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [selectedCategory, selectCategory] = useState("All")

  function switchCategory(event){
    selectCategory(preValue => preValue = event.target.value)
  }

  const foodsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={switchCategory} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {foodsToDisplay.map((item) => {
          return <Item 
           key={item.id} 
           name={item.name}
           category={item.category}/>
        })}
      </ul>
    </div>
  );
}

export default ShoppingList;
