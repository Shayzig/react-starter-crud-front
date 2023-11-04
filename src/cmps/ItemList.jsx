import React, { memo } from "react";
import { ItemPreview } from "./ItemPreview";

export const ItemList = memo(({ items, onRemoveItem }) => {
  return (
    <section className="item-list simple-cards-grid">
      {items.map((item) => (
        <ItemPreview onRemoveItem={onRemoveItem} key={item._id} item={item} />
      ))}
    </section>
  );
});
