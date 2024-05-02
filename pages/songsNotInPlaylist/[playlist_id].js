/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSongsNotOnPlaylist } from '../../api/SongsData';
import PlaylistDetail from '../../components/PlaylistDetail';

export default function SongsNotInPlaylist() {
  const [songsNotInPlaylist, setSongsNotInPlaylist] = useState([]);

  const router = useRouter();
  const { playlist_id } = router.query;

  const getAllSongsNotInPlaylist = () => {
    getSongsNotOnPlaylist(playlist_id).then(setSongsNotInPlaylist);
  };

  useEffect(() => {
    getAllSongsNotInPlaylist();
  }, []);

  return (
    <div className="d-flex flex-wrap" style={{ marginLeft: '0 auto' }}>
      {songsNotInPlaylist.map((songObject) => (
        <PlaylistDetail key={songObject.id} songObj={songObject} onUpdate={getAllSongsNotInPlaylist} />
      ))}
    </div>
  );
}
