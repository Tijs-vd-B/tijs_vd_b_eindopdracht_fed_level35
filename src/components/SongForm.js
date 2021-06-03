import React from "react";
import InputTextField from "./InputTextField";
import InputSelect from "./InputSelect";

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
        <InputSelect
          name="newSongGenre"
          items={props.genres}
          placeholder="Unknown"
          //   defaultValue="Unknown"
          handleChange={props.handleChange}
        />
        <InputSelect
          name="newSongRating"
          items={props.ratingOptions}
          placeholder="0"
          //   defaultValue="0"
          handleChange={props.handleChange}
        />
        <button onClick={props.handleClickAddSong}>Add Song</button>
      </form>
    </div>
  );
}

export default SongForm;
