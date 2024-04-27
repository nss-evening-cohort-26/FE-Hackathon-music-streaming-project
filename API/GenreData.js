import { clientCredentials } from '../utils/client';

const endpoint = clientCredentials.databaseURL;

const getAllGenres = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/genres`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => resolve(resp.json()))
    .catch(reject);
});

const getGenreById = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/api/genres/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((resp) => resolve(resp.json()))
    .catch(reject);
});

export {
  getAllGenres,
  getGenreById,
};
