Teaching assignment for WinC FED level 35

(favo)song-saver - Single Page Application (SPA)

Changelog:

- Initial setup:
  - created react-app savesong
  - setup basic structure:
    - App
      - SongOverview
        - SongForm
        - SongList
- Basic addSong functionality for title and artist added and working
- Added basic rendering of the SongList
- Added rating (0-5) creation and displaying, split InputField into InputTextField & InputNumberField
- Added genre-list selector
- Moved the ratings input from InputNumberField to InputSelect, since it is a bit cleaner and makes all handling illegal input obsolete, ratings currently work with 0.5 increments, but since that is ugly will probably move to just 0,1,2,3,4,5... InputSelect was modified to work with props.items (props.genres was a tad specific)
- > sidestep, trying to use react-select to create the select-list and pass a default when nothing is selected, make sure to run  [npm install react-select] when running this branch
- Although the sidestep in branch [reeact-select] was nice for creating select lists, but it created other issues and did not help in setting a default easily. Reverted back to main and figured I'd overlooked just putting a defaults in the initial {this.state}
- Added protection from not entering a title or artist.
- > sidestep, [add-remove] add remove function on items in the songlist
it works, but the way of adding an id/key by using the array.length now has issues since the length goes down, but the id's remain unchanged
- > redid add id, by always using a new unused id in handleClickAddSong, and store it in state, but now I can no longer depend on the id being the same as the elements index in the array, still no return to main...
- > Used a for-loop to find the index of the item to be removed, all ok , back to main.
- Moved all table data into SongList, and have it not rendered when there are no songs...
- > Added basic sorting (for now only ascending on Songtitle and Artist)
- > Sorting added on all headers {title, artist, genre, rating} ascending and descending (switches on second click), using React.useState() hook to set sort-order.
- > Sorted data is put in a React.useMemo() hook, which should improve performance (likely only noticeable with HUGE songlists ;) ) , back to main.
- Added a simple Remove All that removes all songs, maybe I should add a 'are you sure' dialog
- Basic styling on the form-container
- Added a visual indication what sorting is active
- > The beginnings of a filtering on Genre/Rating...
- > Basic filtering works, now set to All (default state) , need options set the filter (and clean up unused stuff)
