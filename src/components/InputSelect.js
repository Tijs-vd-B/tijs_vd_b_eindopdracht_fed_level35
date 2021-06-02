import React from "react";

function InputSelect(props) {
  const listItems = props.genres.map((item) => (
    <option value={item} key={props.genres.indexOf(item)}>
      {item}
    </option>
  ));

  return (
    <select
      className="song-form-item"
      name={props.name}
      defaultValue={props.name}
      onChange={props.handleChange}
    >
      {listItems}
    </select>
  );
}

export default InputSelect;
