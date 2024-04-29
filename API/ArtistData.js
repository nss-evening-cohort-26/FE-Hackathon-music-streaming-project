import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllArtists = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/artists`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => resolve(resp.json()))
    .catch(reject);
});

const getArtistById = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/artists/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => resolve(resp.json()))
    .catch(reject);
});

export {
  getAllArtists,
  getArtistById,
};
