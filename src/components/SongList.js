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
  return listItems;
}

export default SongList;
