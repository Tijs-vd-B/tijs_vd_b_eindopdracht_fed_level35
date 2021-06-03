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
        { label: "Unknown", value: "Unknown" },
        { label: "Blues", value: "Blues" },
        { label: "Classical", value: "Classical" },
        { label: "Country", value: "Country" },
        { label: "Dance", value: "Dance" },
        { label: "Dubstep", value: "Dubstep" },
        { label: "EDM", value: "EDM" },
        { label: "Emo", value: "Emo" },
        { label: "Funk", value: "Funk" },
        { label: "Folk", value: "Folk" },
        { label: "Garage", value: "Garage" },
        { label: "Grunge", value: "Grunge" },
        { label: "Hip Hop", value: "Hip Hop" },
        { label: "House", value: "House" },
        { label: "Indie", value: "Indie" },
        { label: "Jazz", value: "Jazz" },
        { label: "K-Pop", value: "K-Pop" },
        { label: "Latin", value: "Latin" },
        { label: "Metal", value: "Metal" },
        { label: "Motown", value: "Motown" },
        { label: "Opera", value: "Opera" },
        { label: "Pop", value: "Pop" },
        { label: "Punk", value: "Punk" },
        { label: "Rap", value: "Rap" },
        { label: "Reggae", value: "Reggae" },
        { label: "R&B", value: "R&B" },
        { label: "Rock", value: "Rock" },
        { label: "Soul", value: "Soul" },
        { label: "Techno", value: "Techno" },
        { label: "Trance", value: "Trance" },
        { label: "World", value: "World" },
      ],
      ratingOptions: [
        { label: 0, value: 0 },
        { label: 1, value: 1 },
        { label: 2, value: 2 },
        { label: 3, value: 3 },
        { label: 4, value: 4 },
        { label: 5, value: 5 },
      ],
      //   newSongGenre: "Unknown",
      //   newSongRating: 0,
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
