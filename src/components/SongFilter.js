import React from "react";
import InputSelect from "./InputSelect";

function SongFilter(props) {
  return (
    <div className="songfilter-container">
      Filter the list of songs:
      <form className="songfilter-form" onChange={props.handleChange}>
        <InputSelect
          name="filterGenre"
          items={props.genres}
          handleChange={props.handleChange}
          firstItem="-=[Filter on a Genre]=-"
        />
        <InputSelect
          name="filterRating"
          items={props.ratingOptions}
          handleChange={props.handleChange}
          firstItem="-=[Filter on a Rating]=-"
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
