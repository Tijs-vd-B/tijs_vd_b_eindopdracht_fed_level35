import React from "react";

function SongList(props) {
  const [sortedField, setSortedField] = React.useState(null);
  let sortedData = [...props.songs];
  if (sortedField !== null) {
    sortedData.sort((a, b) => {
      if (a[sortedField] < b[sortedField]) {
        return -1;
      }
      if (a[sortedField] > b[sortedField]) {
        return 1;
      }
      return 0;
    });
  }
  const listItems = sortedData.map((item) => (
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
            <th className="song-row__item">
              <button type="button" onClick={() => setSortedField("title")}>
                Song
              </button>
            </th>
            <th className="song-row__item">
              <button type="button" onClick={() => setSortedField("artist")}>
                Artist
              </button>
            </th>
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
