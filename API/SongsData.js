import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// get all songs
const getSongs = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/songs`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// get single song with playlists
const getSingleSong = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/songs/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// get songs by genre id
const getSongsByGenre = (genreId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/songs/genre/${genreId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// get songs by artist id
const getSongsByArtist = (artistId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/songs/artist/${artistId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// search by name, artist, genre
const searchSongs = (searchInput) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/songs/search/${searchInput}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// add song to playlist
const addSong = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/playlists/add/${payload.playlistId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// remove song from playlist
const removeSong = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/playlists/remove/${payload.playlistId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// get songs not on playlist
const getSongsNotOnPlaylist = (playlistId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/playlists/${playlistId}/available`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

export {
  getSingleSong, getSongs, getSongsByGenre, getSongsByArtist, searchSongs, addSong, removeSong, getSongsNotOnPlaylist,
};
