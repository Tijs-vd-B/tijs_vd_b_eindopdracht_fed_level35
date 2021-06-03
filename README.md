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
- > sidestep, trying to use react-select to create the select-list and pass a default when nothing is selected, make sure to run  [npm install react-select]
- Although the sidestep in branch [reeact-select] was nice for creating select lists, but it created other issues and did not help in setting a default easily. Reverted back to main and figured I's overlooked just putting a defaults in the initial {this.state}
- Added protection from not entering a title or artist.
