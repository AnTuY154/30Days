import { useState } from "react";
import Input from "./Input/Input";
import ListItem from "./List/ListItem";
import "./ToDoList.scss";

function ToDoList() {
  const [listItem, setListItem] = useState([]);

  const handldFindIndex = (list, id) => {
    for (let i = 0; i < list.length; i++) {
      if (list[i].id === id) {
        return i;
      }
    }
  };

  const handleAddItem = (item) => {
    setListItem((list) => [
      ...list,
      {
        id: Math.random(),
        item: item,
        isDone: false,
      },
    ]);
  };

  const handleDeleteItem = (id) => {
    setListItem((list) => {
      const clone = [...list];
      const index = handldFindIndex(clone, id);
      console.log(index);
      clone.splice(index, 1);
      return clone;
    });
  };

  const handleChangeItemStatus = (id) => {
    setListItem((list) => {
      const clone = [...list];
      const index = handldFindIndex(clone, id);
      const item = clone[index];
      clone[index] = {
        ...item,
        isDone: !item.isDone,
      };
      return clone;
    });
  };

  return (
    <div className="container">
      <Input
        placeholder="Enter your todo"
        buttonText="Add"
        addItem={handleAddItem}
      />
      <ListItem
        changeStatus={handleChangeItemStatus}
        deleteItem={handleDeleteItem}
        listItem={listItem}
      />
    </div>
  );
}

export default ToDoList;
