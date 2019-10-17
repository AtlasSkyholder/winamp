const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function(playNum) {
  let play = playNum;
  let id = play["id"];
  let name = play["name"];
  let tracks = play["tracks"].length;
  if (tracks === 1){
    console.log(id + ": " + name + " - " + tracks + " track");  //for playlists with single tracks
  } else {
    console.log(id + ": " + name + " - " + tracks + " tracks"); // for playlists with 0 or multiple tracks
  }
  let trk = play["tracks"];
  for (let i = 0; i < trk.length; i++) {
    printTracks(trk[i]);
  }
};


// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(trakId) {
  let tracks = library["tracks"];
  let trk = tracks[trakId];
  let id = trk["id"];
  let name = trk["name"];
  let artist = trk["artist"];
  let album = trk["album"];
  console.log(id + ": " + name + " by " + artist + " (" + album + ")");
};


// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let listId = playlistId;
  let playlists = library["playlists"];
  return playlists[listId];
};


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  let playlists = library["playlists"];
  playlists[playlistId]["tracks"].push(trackId);
};


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  let word = name;
  let person = artist;
  let cd = album;
  let tracks = library["tracks"];
  let count = 0;
  for (let item in tracks){
    if(item in tracks){
      count++;
    }
  }
  let idNum = 't0' + (count + 1);
  tracks[idNum] = {id: idNum, name: word, artist: person, album: cd};
};


// adds a playlist to the library
const addPlaylist = function(name) {
  let playName = name;
  let playlists = library["playlists"];
  let count = 0;
  for (let item in playlists) {
    if(item in playlists) {
      count++
    }
  }
  let playNum = 'p0' + (count + 1);
  playlists[playNum] = {id: playNum, name: playName, tracks: []};
};


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri") 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};

//printPlaylists(library);
//printTracks(library);
//printPlaylists(printPlaylist('p01'));
//addTrackToPlaylist('t01', 'p02');

//addTrack('Polly', 'Nirvana', 'Nevermind');
//addPlaylist('Music for jogging');