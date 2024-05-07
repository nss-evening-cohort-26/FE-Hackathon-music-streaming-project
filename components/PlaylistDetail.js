/* eslint-disable camelcase */
/* eslint-disable no-lone-blocks */
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { IoAddCircleSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { addSong, removeSong } from '../api/SongsData';

export default function PlaylistDetail({
  detailObj, onUpdate,
}) {
  const router = useRouter();

  const { playlist_id } = router.query;

  const payload = {
    playlistId: playlist_id,
    songId: detailObj.songObj?.id,
  };

  const addSongToPlaylist = () => {
    addSong(payload).then(() => {
      alert('Song successfully added!');
      onUpdate();
      // router.push(`/playlist/${playlist_id}`);
    });
  };

  const deleteSongFromPlayllist = () => {
    if (window.confirm(`Sure you want to delete ${detailObj.songObj?.name} from your playlist?`)) {
      removeSong(payload).then(() => onUpdate());
    }
  };

  return (
    <div className="flex flex-col">
      <div className="song-card" style={{ minWidth: '30em', alignContent: 'left' }}>
        <div className="song-info">
          <h3 className="song-name">{detailObj.songObj.name}</h3>
          <p className="song-artist">{router.asPath === `/songsNotInPlaylist/${playlist_id}` ? detailObj.artistObj.name : detailObj.songObj.artistName}</p>
          <p className="song-details">
            <strong>Genre:</strong> {router.asPath === `/songsNotInPlaylist/${playlist_id}` ? detailObj.genreObj.name : detailObj.songObj.genreName} | <strong>Year:</strong> {detailObj.songObj.year}  | <strong>Duration:</strong> {detailObj.songObj.duration}
          </p>
        </div>
        <div className="corner">
          {router.asPath === `/playlist/${playlist_id}`
            ? <button aria-label="delete" type="button" className="delete-btn" onClick={deleteSongFromPlayllist}><MdDeleteForever /></button>
            : <button type="button" aria-label="add" className="add-btn" onClick={addSongToPlaylist}><IoAddCircleSharp /></button>}
        </div>
      </div>
    </div>
  );
}

PlaylistDetail.propTypes = {
  detailObj: PropTypes.shape({
    songObj: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      artistName: PropTypes.string,
      genreName: PropTypes.string,
      year: PropTypes.number,
      duration: PropTypes.string,
    }).isRequired,
    artistObj: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    genreObj: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
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
