import React from "react";

function SongList(props) {
  const data = props.songs;
  const [sortConfig, setSortConfig] = React.useState(null);

  const sortedData = React.useMemo(() => {
    let sortedData = [...data];
    if (sortConfig !== null) {
      sortedData.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
    }
    return sortedData;
  }, [data, sortConfig]);

  const requestSort = (key) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
    console.log(sortConfig);
  };

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
              <button type="button" onClick={() => requestSort("title")}>
                Song
              </button>
            </th>
            <th className="song-row__item">
              <button type="button" onClick={() => requestSort("artist")}>
                Artist
              </button>
            </th>
            <th className="song-row__item">
              <button type="button" onClick={() => requestSort("genre")}>
                Genre
              </button>
            </th>
            <th className="song-row__item">
              <button type="button" onClick={() => requestSort("rating")}>
                Rating
              </button>
            </th>
            <th className="song-row__item">Remove</th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    )
  );
}

export default SongList;
