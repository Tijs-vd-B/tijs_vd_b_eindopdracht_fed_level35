import React from "react";
import InputSelect from "./InputSelect";

function SongFilter(props) {
  return (
    <form className="songfilter-container" onChange={props.handleChange}>
      <InputSelect
        name="filterGenre"
        items={props.genres}
        handleChange={props.handleChange}
      />
      <InputSelect
        name="filterRating"
        items={props.ratingOptions}
        handleChange={props.handleChange}
      />
    </form>
  );
}

export default SongFilter;
