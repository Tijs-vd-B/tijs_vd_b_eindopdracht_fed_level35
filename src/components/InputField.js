import React from "react";

function InputField(props) {
  return (
    <div className="song-form-item">
      <input
        type="text"
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.handleChange}
      />
    </div>
  );
}

export default InputField;
