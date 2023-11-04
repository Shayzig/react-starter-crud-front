import React, { useCallback, useEffect } from "react";
import { Link } from "react-router-dom";
import { loadItems, removeItem, setFilterBy } from "../store/actions/item.actions";
import { useSelector } from "react-redux";
import { ItemFilter } from "../cmps/ItemFilter";
import { ItemList } from "../cmps/ItemList";

export function ItemIndex() {
  const items = useSelector((state) => state.itemModule.items);
  const filterBy = useSelector((state) => state.itemModule.filterBy);

  useEffect(() => {
    loadItems();
  }, [filterBy]);

  const onChangeFilter = useCallback((filterBy) => {
      setFilterBy(filterBy)
      loadItems()
  }, [])

  const onRemoveItem = useCallback(async (itemId) => {
      try {
          await removeItem(itemId)
      } catch (error) {
          console.log('cant remove item:', error)
      }
  }, [])

  if (!items) return <div>Loading...</div>;
  
  return (
    <section className="item-index">
      <ItemFilter onChangeFilter={onChangeFilter} filterBy={filterBy} />
      <Link to="/item/edit">Add</Link>
      <ItemList onRemoveItem={onRemoveItem} items={items} />
    </section>
  );
}
