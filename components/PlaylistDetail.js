/* eslint-disable camelcase */
/* eslint-disable no-lone-blocks */
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { IoAddCircleSharp } from 'react-icons/io5';
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
    <div className="flex flex-col">
      <div className="song-card" style={{ minWidth: '30em', alignContent: 'left' }}>
        <div className="song-info">
          <h3 className="song-name">{songObj.name}</h3>
          <p className="song-artist">{songObj.artist?.name}</p>
          <p className="song-details">
            <strong>Genre:</strong> {songObj.genre?.name} | <strong>Year:</strong> {songObj.year}  | <strong>Duration:</strong> {songObj.duration}
          </p>
        </div>
        <div className="corner">
          {router.asPath === `/playlist/${playlist_id}` ? <button aria-label="delete" type="button" className="delete-btn" onClick={deleteSongFromPlayllist}><MdDeleteForever /></button> : <button type="button" aria-label="add" className="delete-btn" onClick={addSongToPlaylist}><IoAddCircleSharp /></button>}
        </div>
      </div>
    </div>
  );
}

PlaylistDetail.propTypes = {
  songObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    artist: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
    genre: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    }),
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
