import React from "react";
import InputTextField from "./InputTextField";
import InputSelect from "./InputSelect";

function SongForm(props) {
  return (
    <form className="songform-container">
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
      />
      <InputSelect
        name="newSongRating"
        items={props.ratingOptions}
        handleChange={props.handleChange}
      />
      <button onClick={props.handleClickAddSong}>Add Song</button>
    </form>
  );
}

export default SongForm;
