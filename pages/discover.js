import React, { useEffect, useState } from 'react';
import PlaylistCard from '../components/PlaylistCard';
import { getAllPlaylists } from '../api/PlaylistData';
import { useAuth } from '../utils/context/authContext';

export default function Discover() {
  const [playlists, setPlaylists] = useState([]);

  const { user } = useAuth();

  const getAllUsersPlaylists = () => {
    getAllPlaylists(user.id).then(setPlaylists);
  };

  useEffect(() => {
    getAllUsersPlaylists();
    console.warn(user);
  }, []);

  return (
    <div style={{ width: '80%' }}>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {playlists.length === 0 ? <h1 style={{ textAlign: 'center', color: 'white', width: '100%' }}>There are no public playlists </h1> : playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlistObj={playlist} onUpdate={getAllUsersPlaylists} user={user.id} />
        ))}
      </div>
    </div>
  );
}
