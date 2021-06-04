import React from "react";

function SongList(props) {
  const data = props.songs;
  const [sortConfig, setSortConfig] = React.useState(null);

  let sortedData = data;
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

  const setButtonText = (name) => {
    // console.log(sortConfig.key);
    if (sortConfig == null || sortConfig.key !== name.toLowerCase())
      return `${name}`;
    else if (sortConfig.direction === "descending") return `${name} ˄`;
    else return `${name} ˅`;
  };

  const filterSetting = (filter) => {
    console.log(filter);
    const filterOn = filter.value;
    console.log(filterOn);
    if (filter === "All") return () => true;
    else if (filter.name === "genre") {
      return (i) => i.genre === filter.value;
    } else if (filter.name === "rating") {
      return (i) => i.rating === parseInt(filter.value);
    }
  };

  const listItems = sortedData
    .filter(filterSetting(props.currentFilter))
    .map((item) => (
      <tr className="song-table-item" key={item.id} value={item.title}>
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
      <table className="song-table" style={{ width: "100%" }}>
        <thead>
          <tr className="song-table-header">
            <th className="song-row__item">
              <button type="button" onClick={() => requestSort("title")}>
                {setButtonText("Title")}
              </button>
            </th>
            <th className="song-row__item">
              <button type="button" onClick={() => requestSort("artist")}>
                {setButtonText("Artist")}
              </button>
            </th>
            <th className="song-row__item">
              <button type="button" onClick={() => requestSort("genre")}>
                {setButtonText("Genre")}
              </button>
            </th>
            <th className="song-row__item">
              <button type="button" onClick={() => requestSort("rating")}>
                {setButtonText("Rating")}
              </button>
            </th>
            <th className="song-row__item">
              <button type="button" onClick={props.handleClickRemoveAllSongs}>
                RemALL
              </button>
            </th>
          </tr>
        </thead>
        <tbody>{listItems}</tbody>
      </table>
    )
  );
}

export default SongList;
