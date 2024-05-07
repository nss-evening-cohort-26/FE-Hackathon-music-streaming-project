/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getSongsNotOnPlaylist } from '../../api/SongsData';
import PlaylistDetail from '../../components/PlaylistDetail';

export default function SongsNotInPlaylist() {
  const [songsNotInPlaylist, setSongsNotInPlaylist] = useState([]);

  const router = useRouter();
  const { playlist_id } = router.query;

  console.warn(router);

  const getAllSongsNotInPlaylist = () => {
    getSongsNotOnPlaylist(playlist_id).then(setSongsNotInPlaylist);
  };

  useEffect(() => {
    getAllSongsNotInPlaylist();
  }, []);

  return (
    <div>
      <div className="text-center" style={{ marginLeft: '100px', width: '80%' }}>
        <Link href={`/playlist/${playlist_id}`} passHref>
          <Button
            className="info"
            style={{
              marginTop: '15px',
              backgroundColor: '#B6A39E',
              color: 'black',
              border: 'none',
            }}
          >
            Back To Playlist
          </Button>
        </Link>
      </div>
      <div className="d-flex flex-wrap" style={{ marginLeft: '100px' }}>
        {songsNotInPlaylist.map((songObject) => (
          <PlaylistDetail key={songObject.id} songObj={songObject} onUpdate={getAllSongsNotInPlaylist} />
        ))}
      </div>
    </div>
  );
}
