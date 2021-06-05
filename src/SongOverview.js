import React, { Component } from "react";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";
import SongFilter from "./components/SongFilter";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [
        {
          id: 0,
          title: "Hungerstrike",
          artist: "Temple of a Dog",
          genre: "Grunge",
          rating: 5,
        },
        {
          id: 1,
          title: "Halleluja",
          artist: "Jeff Buckley",
          genre: "Indie",
          rating: 5,
        },
        {
          id: 2,
          title: "Rosie",
          artist: "Claw Boys Claw",
          genre: "Indie",
          rating: 4,
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
      nextId: 3,
      currentFilter: "All",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickAddSong = this.handleClickAddSong.bind(this);
    this.handleClickRemoveItem = this.handleClickRemoveItem.bind(this);
    this.handleClickRemoveAllSongs = this.handleClickRemoveAllSongs.bind(this);
    this.handleClickResetFilter = this.handleClickResetFilter.bind(this);
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
      let setId = this.state.nextId;
      const newSong = {
        id: setId,
        title: this.capitalizeFirstChar(this.state.newSongTitle),
        artist: this.capitalizeFirstChar(this.state.newSongArtist),
        genre: this.state.newSongGenre,
        rating: parseInt(this.state.newSongRating),
      };
      setId++;
      console.log(newSong);
      this.setState({
        ...this.state,
        songs: [...this.state.songs].concat(newSong),
        nextId: setId,
      });
      console.log(this.state.nextId);
    }
  };

  handleClickRemoveItem = (item) => {
    console.log(item);
    let newSongs = this.state.songs;
    for (let i = 0; i < newSongs.length; i++) {
      if (newSongs[i] === item) {
        newSongs.splice(i, 1);
      }
    }
    console.log(newSongs);
    this.setState({
      ...this.state,
      songs: newSongs,
    });
  };

  handleClickRemoveAllSongs() {
    this.setState({
      ...this.state,
      songs: [],
    });
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.filterGenre !== this.state.filterGenre) {
      this.setFilter("genre");
    }
    if (prevState.filterRating !== this.state.filterRating) {
      this.setFilter("rating");
    }
  }

  handleClickResetFilter = () => {
    this.setState({
      ...this.state,
      currentFilter: "All",
    });
  };

  setFilter = (type) => {
    let newFilter = "All";
    if (type === "genre") {
      newFilter = { name: "genre", value: this.state.filterGenre };
    } else if (type === "rating") {
      newFilter = { name: "rating", value: this.state.filterRating };
    }
    this.setState({
      ...this.state,
      currentFilter: newFilter,
    });
  };

  render() {
    return (
      <div>
        <SongForm
          handleClickAddSong={this.handleClickAddSong}
          handleChange={this.handleChange}
          genres={this.state.genres}
          ratingOptions={this.state.ratingOptions}
        />
        <hr />
        <SongFilter
          handleChange={this.handleChange}
          genres={this.state.genres}
          ratingOptions={this.state.ratingOptions}
          handleClickResetFilter={this.handleClickResetFilter}
        />
        <hr />
        <SongList
          songs={this.state.songs}
          handleClickRemoveItem={this.handleClickRemoveItem}
          handleClickRemoveAllSongs={this.handleClickRemoveAllSongs}
          currentFilter={this.state.currentFilter}
        />
      </div>
    );
  }
}

export default SongOverview;
