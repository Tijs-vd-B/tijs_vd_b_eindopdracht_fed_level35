import React from "react";

function SongList(props) {
  const listItems = props.songs.map((item) => (
    <tr
      className="song-item"
      key={item.id}
      value={item.title}
      // onClick={props.handleClickGroceryItem}
    >
      <td>{item.title}</td>
      <td>{item.artist}</td>
      <td>Genre</td>
      <td>Rating</td>
    </tr>
  ));
  return listItems;
}

export default SongList;
