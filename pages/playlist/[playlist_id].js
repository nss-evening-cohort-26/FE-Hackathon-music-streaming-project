/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { RiEditLine } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';
import { IoAddCircleSharp } from 'react-icons/io5';
import PlaylistDetail from '../../components/PlaylistDetail';
import { deletePlaylist, getPlaylistById } from '../../api/PlaylistData';
import { useAuth } from '../../utils/context/authContext';

export default function PlaylistDetails() {
  const [playlistDetail, setPlaylistDetail] = useState({});
  const router = useRouter();
  const { user } = useAuth();

  const { playlist_id } = router.query;

  const getPlayListSongs = () => {
    getPlaylistById(playlist_id, user.id).then(setPlaylistDetail);
  };

  const deleteThisPlaylist = () => {
    if (window.confirm(`Sure you want to delete ${playlistDetail.name} ?`)) {
      deletePlaylist(playlist_id).then(router.push('/playlists'));
    }
  };

  useEffect(() => {
    getPlayListSongs();
  }, [playlist_id]);

  return (
    <div className="flex flex-col align-items-center">
      <div style={{
        display: 'flex', justifyContent: 'space-between', marginTop: '25px', width: '100%',
      }}
      >
        <h1 className="audio mb-3"> {playlistDetail.name}</h1>
        {playlistDetail.userId === user.id && (
        <div className="align-content-center mb-2">
          <Link href={`/playlist/edit/${playlist_id}`} passHref>
            <Button className="jelly" style={{ filter: 'hue-rotate(90deg)', padding: '4px 16px', marginRight: '10px' }}><RiEditLine /></Button>
          </Link>
          <Button className="jelly" style={{ padding: '4px 16px' }} onClick={deleteThisPlaylist}><MdDeleteForever /></Button>
        </div>
        )}

      </div>
      {playlistDetail.userId === user.id && (
      <div style={{ display: 'flex', justifyItems: 'flex-start' }}>
        <Link href={`/songsNotInPlaylist/${playlist_id}`} passHref>
          <button
            type="button"
            aria-label="add"
            className="xbutton audio text-center"
            style={{
              width: '80%',
              alignSelf: 'center',
            }}
          >
            <IoAddCircleSharp />
          </button>
        </Link>
      </div>
      )}
      <div className="flex flex-col flex-wrap">
        {playlistDetail.songs?.length === 0 ? (
          <h1 style={{
            marginTop: '40px', color: '#d72121', display: 'flex', flexWrap: 'wrap', textAlign: 'center',
          }}
          >There are no songs in this playlist
          </h1>
        ) : playlistDetail.songs?.map((songObject) => (
          <PlaylistDetail key={songObject.id} songObj={songObject} getUserId={playlistDetail} onUpdate={getPlayListSongs} />
        ))}
      </div>
    </div>
  );
}
