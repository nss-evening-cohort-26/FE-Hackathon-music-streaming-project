/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPlaylistById } from '../../../api/PlaylistData';
import { useAuth } from '../../../utils/context/authContext';
import PlaylistForm from '../../../components/form/PlaylistForm';
import Consolebg from '../../../components/Consolebg';

export default function EditPlaylist() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const { user } = useAuth();

  const { playlist_id } = router.query;

  useEffect(() => {
    getPlaylistById(playlist_id, user.id).then(setEditItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playlist_id]);

  return (
    <div className="flex flex-col justify-content-center align-items-center">
      <Consolebg />
      <PlaylistForm playObj={editItem} />
    </div>
  );
}
