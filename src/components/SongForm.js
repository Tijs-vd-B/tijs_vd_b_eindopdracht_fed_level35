import React from "react";
import InputTextField from "./InputTextField";
import InputSelect from "./InputSelect";

function SongForm(props) {
  return (
    <div className="songform-container">
      <form className="songform-form">
        <InputTextField
          name="newSongTitle"
          placeholder="Song"
          handleChange={props.handleChange}
        />
        <InputTextField
          name="newSongArtist"
          placeholder="Artist"
          handleChange={props.handleChange}
        />
        <InputSelect
          name="newSongGenre"
          items={props.genres}
          handleChange={props.handleChange}
          firstItem="-=[Select a Genre]=-"
        />
        <InputSelect
          name="newSongRating"
          items={props.ratingOptions}
          handleChange={props.handleChange}
          firstItem="-=[Select a Rating]=-"
        />
        <button onClick={props.handleClickAddSong}>Add Song</button>
      </form>
      <button
        className="add-list-button"
        name="addList"
        onClick={props.handleClickAddList}
        value="testsongs"
      >
        +
      </button>
    </div>
  );
}

export default SongForm;
