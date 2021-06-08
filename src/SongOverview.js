import React, { Component } from "react";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";
import SongFilter from "./components/SongFilter";
import testsongs from "./data/testsongs";
import genres from "./data/genres";

class SongOverview extends Component {
  constructor() {
    super();
    this.state = {
      songs: [],
      ratingOptions: [0, 1, 2, 3, 4, 5],
      newSongGenre: "Unknown",
      newSongRating: 0,
      nextId: 3,
      currentFilter: "All",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClickAddSong = this.handleClickAddSong.bind(this);
    this.handleClickAddList = this.handleClickAddList.bind(this);
    this.handleClickRemoveItem = this.handleClickRemoveItem.bind(this);
    this.handleClickRemoveAllSongs = this.handleClickRemoveAllSongs.bind(this);
    this.handleClickResetFilter = this.handleClickResetFilter.bind(this);
  }

  capitalizeFirstChar = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  handleClickAddSong = (event) => {
    event.preventDefault();
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
      this.setState({
        ...this.state,
        songs: [...this.state.songs].concat(newSong),
        nextId: setId,
      });
    }
  };

  handleClickAddList = () => {
    const extraSongs = testsongs;
    let newSongs = this.state.songs;
    let setId = this.state.nextId;
    extraSongs.forEach((item) => {
      setId++;
      newSongs = [...newSongs].concat(item);
    });
    this.setState({
      ...this.state,
      songs: newSongs,
      nextId: setId,
    });
  };

  handleClickRemoveItem = (item) => {
    let newSongs = this.state.songs;
    newSongs.forEach((i, index) => {
      if (i === item) {
        newSongs.splice(index, 1);
      }
    });
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
          handleClickAddList={this.handleClickAddList}
          handleChange={this.handleChange}
          genres={genres}
          ratingOptions={this.state.ratingOptions}
        />
        <SongFilter
          handleChange={this.handleChange}
          genres={genres}
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
