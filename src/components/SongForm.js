import React from "react";
import InputTextField from "./InputTextField";
import InputNumberField from "./InputNumberField";

function SongForm(props) {
  return (
    <div className="songform-container">
      <form>
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
        <InputNumberField
          name="newSongRating"
          placeholder="Rating"
          handleChange={props.handleChange}
        />
        <button onClick={props.handleClickAddSong}>Add Song</button>
      </form>
    </div>
  );
}

export default SongForm;
