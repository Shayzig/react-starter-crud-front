import React from "react";
import { Link } from "react-router-dom";

export function ItemPreview({ item, onRemoveItem }) {
  return (
    <article className="item-preview">
      <Link to={`/item/${item._id}`} className="info">
        <h2>{item.model}</h2>
        <h4>{item.type}</h4>
      </Link>
      <section className="actions">
        <button onClick={() => onRemoveItem(item._id)}>X</button>
        <Link to={`/item/edit/${item._id}`}>Edit</Link>
      </section>
    </article>
  );
}
