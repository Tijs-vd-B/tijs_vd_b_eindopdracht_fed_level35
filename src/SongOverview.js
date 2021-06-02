import React, { Component } from "react";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [{ id: 1, title: "Hungerstrike", artist: "Temple of a Dog" }],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickAddSong = this.handleClickAddSong.bind(this);
  }

  capitalizeFirstChar = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  handleClickAddSong = (event) => {
    event.preventDefault();
    console.log(event);
    const newSong = {
      id: this.state.songs.length + 1,
      title: this.capitalizeFirstChar(this.state.newSongTitle),
      artist: this.capitalizeFirstChar(this.state.newSongArtist),
    };
    console.log(newSong);
    this.setState({
      ...this.state,
      songs: [...this.state.songs].concat(newSong),
    });
  };

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <SongForm
          handleClickAddSong={this.handleClickAddSong}
          handleChange={this.handleChange}
        />
        <table style={{ width: "100%" }}>
          <tbody>
            <tr className="song-header">
              <th className="song-row__item">Song</th>
              <th className="song-row__item">Artist</th>
              <th className="song-row__item">Genre</th>
              <th className="song-row__item">Rating</th>
            </tr>
            <SongList songs={this.state.songs} />
          </tbody>
        </table>
      </div>
    );
  }
}

export default SongOverview;
