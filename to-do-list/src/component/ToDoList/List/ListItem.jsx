import "./ListItem.scss";
import Item from "./Item/Item";

function ListItem(props) {
  const { listItem, deleteItem, changeStatus } = props;

  return (
    <div className="listItem">
      {listItem?.map((data) => (
        <Item
          changeStatus={changeStatus}
          deleteItem={deleteItem}
          key={data.id}
          item={data}
        />
      ))}
    </div>
  );
}

export default ListItem;
