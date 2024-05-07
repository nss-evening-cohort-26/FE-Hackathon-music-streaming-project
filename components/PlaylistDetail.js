/* eslint-disable camelcase */
/* eslint-disable no-lone-blocks */
import React from 'react';

import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { addSong, removeSong } from '../api/SongsData';

export default function PlaylistDetail({ songObj, onUpdate }) {
  const router = useRouter();

  const { playlist_id } = router.query;

  const payload = {
    playlistId: playlist_id,
    songId: songObj?.id,
  };

  const addSongToPlaylist = () => {
    addSong(payload).then(() => {
      alert('Song successfully added!');
      onUpdate();
      // router.push(`/playlist/${playlist_id}`);
    });
  };

  const deleteSongFromPlayllist = () => {
    if (window.confirm(`Sure you want to delete ${songObj?.name} from your playlist?`)) {
      removeSong(payload).then(() => onUpdate());
    }
  };

  return (
    <>
      <div className="song-card">
        <div className="song-info">
          <h3 className="song-name">{songObj?.name}</h3>
          <p className="song-artist">{songObj?.artistName}</p>
          <p className="song-details">
            <strong>Genre:</strong> {songObj?.genreName} | <strong>Year: {songObj?.year}</strong>  | <strong>Duration:</strong> {songObj?.duration}
          </p>
        </div>
        {router.asPath === `/playlist/${playlist_id}` ? <button type="button" className="delete-btn" onClick={deleteSongFromPlayllist}>Delete</button> : <button type="button" className="delete-btn" onClick={addSongToPlaylist}>Add</button>}
      </div>
    </>
  );
}

PlaylistDetail.propTypes = {
  songObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    artistName: PropTypes.string,
    genreName: PropTypes.string,
    year: PropTypes.number,
    duration: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

// PlaylistDetail.propTypes = {
//   songObj: PropTypes.shape({
//     name: PropTypes.string,
//     artist: PropTypes.shape({
//       name: PropTypes.string,
//     }),
//     genre: PropTypes.shape({
//       name: PropTypes.string,
//     }),
//     year: PropTypes.number,
//     duration: PropTypes.string,

//   }).isRequired,
// };

{ /* <Card className="mb-3">
<Card.Body className="d-flex justify-content-between align-items-center">
  <div>
    <Card.Title>Song Name Placeholder</Card.Title>
    <Card.Text>Artist Placeholder</Card.Text>
    <Card.Text>
      <strong>Genre:</strong> Genre Placeholder | <strong>Year:</strong> Year Placeholder | <strong>Duration:</strong> Duration Placeholder
    </Card.Text>
  </div>
  <Button variant="danger">Delete</Button>
</Card.Body>
</Card> */ }
