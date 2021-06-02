import React from "react";

function InputNumberField(props) {
  return (
    <div className="song-form-item">
      <input
        type="number"
        name={props.name}
        min="0"
        max="5"
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default InputNumberField;
