import React from "react";
import InputSelect from "./InputSelect";

function SongFilter(props) {
  return (
    <div className="songfilter-container">
      <form className="songfilter-form" onChange={props.handleChange}>
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
      <button
        className="songfilter-button"
        name="filterReset"
        onClick={props.handleClickResetFilter}
        value="All"
      >
        All
      </button>
    </div>
  );
}

export default SongFilter;
