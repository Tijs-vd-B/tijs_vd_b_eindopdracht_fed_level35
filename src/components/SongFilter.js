import React from "react";
import InputSelect from "./InputSelect";

function SongFilter(props) {
  return (
    <form className="songfilter-container">
      <InputSelect
        name="filterGenre"
        items={props.genres}
        handleChange={props.handleClickFilter}
      />
      <InputSelect
        name="filterRating"
        items={props.ratingOptions}
        handleChange={props.handleClickFilter}
      />
    </form>
  );
}

export default SongFilter;
