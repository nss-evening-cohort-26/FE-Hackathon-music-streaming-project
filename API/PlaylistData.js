import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

// get all playlists
const getAllPlaylists = (userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/playlists?userId=${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

// get favorite playlists
const getFavoritePlaylists = (userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/playlists/favorite?userId=${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

// get playlist by ID
const getPlaylistById = (playlistId, userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/playlists/${playlistId}?userId=${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

// get user's playlists
const getUserPlaylists = (userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/playlists/mine?userId=${userId}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

// create a new playlist
const createPlaylist = (playlistDetails, userId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/playlists`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...playlistDetails, userId }),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

// update a playlist
const updatePlaylist = (playlistId, playlistDetails) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/playlists/${playlistId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(playlistDetails),
  }).then((response) => response.json())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

// delete a playlist
const deletePlaylist = (playlistId) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/playlists/${playlistId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.text())
    .then((data) => resolve(data))
    .catch((error) => reject(error));
});

export {
  getAllPlaylists,
  getFavoritePlaylists,
  getPlaylistById,
  getUserPlaylists,
  createPlaylist,
  updatePlaylist,
  deletePlaylist,
};
