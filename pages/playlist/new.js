import React from 'react';
import PlaylistForm from '../../components/form/PlaylistForm';
import { getUserPlaylists } from '../../api/PlaylistData';

export default function AddPlaylist() {
  return (
    <div>
      <PlaylistForm onUpdate={getUserPlaylists} />
    </div>
  );
}
