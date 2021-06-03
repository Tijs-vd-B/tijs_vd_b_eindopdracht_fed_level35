import React from "react";

function SongList(props) {
  const listItems = props.songs.map((item) => (
    <tr className="song-item" key={item.id} value={item.title}>
      <td>{item.title}</td>
      <td>{item.artist}</td>
      <td>{item.genre}</td>
      <td>{item.rating}</td>
      <td>
        <button onClick={props.handleClickRemoveItem.bind(this, item)}>
          Remove
        </button>
      </td>
    </tr>
  ));
  return (
    sortedData.length > 0 && (
      <table style={{ width: "100%" }}>
        <thead>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
            <th className="song-row__item">Remove</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    )
  );
}

export default SongList;
