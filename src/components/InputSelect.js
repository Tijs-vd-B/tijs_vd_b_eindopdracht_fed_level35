import React from "react";

function InputSelect(props) {
  const listItems = props.items.map((item) => (
    <option value={item} key={props.items.indexOf(item)}>
      {item}
    </option>
  ));

  return (
    <select
      className="song-form-item"
      name={props.name}
      onChange={props.handleChange}
      defaultValue=""
    >
      <option value="" key={props.firstItem} disabled>
        {props.firstItem}
      </option>
      {listItems}
    </select>
  );
}

export default InputSelect;
