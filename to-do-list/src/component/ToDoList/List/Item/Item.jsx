import { useState } from "react";
import "./Item.scss";
import { BsFillTrashFill } from "react-icons/bs";

function Item(props) {
  const { item, deleteItem, changeStatus } = props;

  const handleDeleteItem = (e) => {
    e.stopPropagation();
    deleteItem(item.id);
  };

  const handleChangeStaus = () => {
    changeStatus(item.id);
  };

  return (
    <div onClick={handleChangeStaus} className="item">
      <div className={`${item.isDone ? "item_done" : ""}`}>{item.item}</div>
      <div onClick={handleDeleteItem} className="item_icon">
        <BsFillTrashFill />
      </div>
    </div>
  );
}

export default Item;
