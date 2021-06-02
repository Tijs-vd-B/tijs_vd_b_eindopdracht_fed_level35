import React from "react";
import InputField from "./InputField";

function SongForm(props) {
  return (
    <div className="songform-container">
      <form>
        <InputField
          name="newSongTitle"
          placeholder="Song"
          handleChange={props.handleChange}
        />
        <InputField
          name="newSongArtist"
          placeholder="Artist"
          handleChange={props.handleChange}
        />

        <button onClick={props.handleClickAddSong}>Add Song</button>
      </form>
    </div>
  );
}

export default SongForm;
