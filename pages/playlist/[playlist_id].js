/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Button } from 'react-bootstrap';
import PlaylistDetail from '../../components/PlaylistDetail';
import { getPlaylistById } from '../../api/PlaylistData';
import { useAuth } from '../../utils/context/authContext';

export default function PlaylistDetails() {
  const [playlistDetail, setPlaylistDetail] = useState({});
  const router = useRouter();
  const { user } = useAuth();

  const { playlist_id } = router.query;

  const getPlayListSongs = () => {
    getPlaylistById(playlist_id, user.id).then(setPlaylistDetail);
    console.warn(getPlaylistById(playlist_id, user.id));
  };

  useEffect(() => {
    getPlayListSongs();
    console.warn(playlist_id);
    return () => {
      setPlaylistDetail({});
    };
  }, [playlist_id]);

  return (
    <div style={{ marginLeft: '200px', width: '80%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '25px' }}>
        <div>
          <h3 className="display-5 mb-3"> {playlistDetail.name}</h3>
          <Button variant="success" style={{ borderRadius: '20px', padding: '5px 25px', marginRight: '5px' }}>Edit</Button>
          <Button variant="danger" style={{ borderRadius: '20px', padding: '5px 25px' }}>Delete</Button>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Button
            variant="primary"
            style={{
              borderRadius: '20px', padding: '3px 25px', fontSize: '20px', height: '45px',
            }}
          >Add A Song
          </Button>
        </div>
      </div>
      {playlistDetail.songs?.map((songObject) => (
        <PlaylistDetail key={songObject.id} songObj={songObject} onUpdate={getPlayListSongs} />
      ))}

    </div>
  );
}
