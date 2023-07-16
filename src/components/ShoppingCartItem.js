import React, { useContext } from "react";
import { ScCartItem, ScCartItemDetails } from "./scParts";
import { CartContext } from "../context/CartContext";

const Item = (props) => {
  const { removeItem } = useContext(CartContext)
  return (
    <ScCartItem>
      <img src={props.image} alt={`${props.title} book`} />

      <ScCartItemDetails>
        <h2>{props.title}</h2>
        <p>$ {props.price}</p>
        <button onClick={() => removeItem(props.id)}>Remove from cart</button>
      </ScCartItemDetails>
    </ScCartItem>
  );
};

export default Item;