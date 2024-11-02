
import React, {useState} from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true)

  function handleCartAdd(){
    setInCart((inCart) => !inCart)
  }

  const liClass = inCart ? "" : "in-cart"

  return (
    //<li className="">
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartAdd} className="add">{inCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}
export default Item;