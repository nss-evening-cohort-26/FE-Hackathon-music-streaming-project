/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPlaylistById } from '../../../api/PlaylistData';
import { useAuth } from '../../../utils/context/authContext';
import PlaylistForm from '../../../components/form/PlaylistForm';

export default function EditPlaylist() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const user = useAuth();

  const { playlist_id } = router.query;

  useEffect(() => {
    getPlaylistById(playlist_id, user.id).then(setEditItem);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    console.warn(editItem);
  }, [playlist_id]);

  return (
    <div>
      <PlaylistForm playObj={editItem} />
    </div>
  );
}
