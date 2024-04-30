import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getPlaylistById } from '../../../API/PlaylistData';
import { useAuth } from '../../../utils/context/authContext';
import PlaylistForm from '../../../components/form/PlaylistForm';

export default function EditPlaylist() {
  const [editItem, setEditItem] = useState({});
  const router = useRouter();
  const user = useAuth();

  const { id } = router.query;

  useEffect(() => {
    getPlaylistById(id, user.id).then(setEditItem);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.id]);

  return (
    <div>
      <PlaylistForm playObj={editItem} />
    </div>
  );
}
