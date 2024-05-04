import React from 'react';
import PlaylistForm from '../../components/form/PlaylistForm';
import { getUserPlaylists } from '../../api/PlaylistData';
import Consolebg from '../../components/Consolebg';

export default function AddPlaylist() {
  return (
    <div className="flex flex-col justify-content-center align-items-center">
      <Consolebg />
      <PlaylistForm onUpdate={getUserPlaylists} />
    </div>
  );
}
