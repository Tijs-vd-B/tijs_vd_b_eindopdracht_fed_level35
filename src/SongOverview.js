import React, { Component } from "react";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 1,
          title: "Hungerstrike",
          artist: "Temple of a Dog",
          genre: "Grunge",
          rating: 5,
        },
      ],
      genres: [
        "Unknown",
        "Blues",
        "Classical",
        "Country",
        "Dance",
        "Dubstep",
        "EDM",
        "Emo",
        "Funk",
        "Folk",
        "Garage",
        "Grunge",
        "Hip Hop",
        "House",
        "Indie",
        "Jazz",
        "K-Pop",
        "Latin",
        "Metal",
        "Motown",
        "Opera",
        "Pop",
        "Punk",
        "Rap",
        "Reggae",
        "R&B",
        "Rock",
        "Soul",
        "Techno",
        "Trance",
        "World",
      ],
      ratingOptions: [0, 1, 2, 3, 4, 5],
      newSongGenre: "Unknown",
      newSongRating: 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickAddSong = this.handleClickAddSong.bind(this);
  }

  capitalizeFirstChar = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  handleClickAddSong = (event) => {
    event.preventDefault();
    console.log(this.state);
    if (
      this.state.newSongTitle === undefined ||
      this.state.newSongArtist === undefined
    ) {
      alert(`PLease fill in all fields`);
    } else if (
      this.state.newSongTitle.length > 50 ||
      this.state.newSongArtist.length > 50
    ) {
      alert(
        `Your input is a bit too long for comfort sry...! I'd keep it under 50 chars..."`
      );
    } else {
      const newSong = {
        id: this.state.songs.length + 1,
        title: this.capitalizeFirstChar(this.state.newSongTitle),
        artist: this.capitalizeFirstChar(this.state.newSongArtist),
        genre: this.state.newSongGenre,
        rating: this.state.newSongRating,
      };
      console.log(newSong);
      this.setState({
        ...this.state,
        songs: [...this.state.songs].concat(newSong),
      });
    }
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
          genres={this.state.genres}
          ratingOptions={this.state.ratingOptions}
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
