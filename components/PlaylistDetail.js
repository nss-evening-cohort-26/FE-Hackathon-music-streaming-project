/* eslint-disable camelcase */
/* eslint-disable no-lone-blocks */
import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { IoAddCircleSharp } from 'react-icons/io5';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { addSong, removeSong } from '../api/SongsData';
import { useAuth } from '../utils/context/authContext';

export default function PlaylistDetail({
  songObj, onUpdate, getUserId,
}) {
  const router = useRouter();
  const { user } = useAuth();
  const { playlist_id } = router.query;

  const payload = {
    playlistId: playlist_id,
    songId: songObj?.id,
  };

  console.warn('songObj', songObj);

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
          <p className="song-artist">{router.asPath === `/songsNotInPlaylist/${playlist_id}` ? songObj.artist.name : songObj.artistName}</p>
          <p className="song-details">
            <strong>Genre:</strong> {router.asPath === `/songsNotInPlaylist/${playlist_id}` ? songObj.genre.name : songObj.genreName} | <strong>Year:</strong> {songObj.year}  | <strong>Duration:</strong> {songObj.duration}
          </p>
        </div>
        <div className="corner">
          {router.asPath === `/playlist/${playlist_id}` && getUserId.userId === user.id
            ? (
              <button aria-label="delete" type="button" className="delete-btn" onClick={deleteSongFromPlayllist}>
                <MdDeleteForever />
              </button>
            )
            : (
              ''
            )}
          {router.asPath === `/songsNotInPlaylist/${playlist_id}`
            ? (
              <button type="button" aria-label="add" className="add-btn" onClick={addSongToPlaylist}>
                <IoAddCircleSharp />
              </button>
            )
            : (
              ''
            )}
        </div>
      </div>
    </div>
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
    artist: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
    genre: PropTypes.shape({
      name: PropTypes.string,
    }).isRequired,
  }).isRequired,

  onUpdate: PropTypes.func.isRequired,
  getUserId: PropTypes.shape({
    userId: PropTypes.number.isRequired,
  }).isRequired,
};
