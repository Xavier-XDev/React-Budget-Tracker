import { ListItem } from "../ListItem/ListItem";

export function List({ items }) {
  return (
    <div style={{ overflowY: "scroll", height: "40%" }}>
      <table className="table table-hover table-borderless">
        <tbody>
          {items.map((item, index) => (
            <ListItem key={item + index} item={item} /> //for expense total
          ))}
        </tbody>
      </table>
    </div>
  );
}
//map is made to dynamically loop over the items and render several list items
