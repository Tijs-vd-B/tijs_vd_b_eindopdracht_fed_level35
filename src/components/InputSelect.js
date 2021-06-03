import React from "react";
import Select from "react-select";

function InputSelect(props) {
  const listItems = props.items;
  // .map((item) => (
  //   <option value={item} key={props.items.indexOf(item)}>
  //     {item}
  //   </option>
  // ));

  return (
    <Select
      className="song-form-item"
      name={props.name}
      options={listItems}
      defaultValue={listItems[0]}
      selectValue={listItems[0]}
      placeholder={props.placeholder}
      // onChange={props.handleChange}
    />
  );
}

export default InputSelect;
