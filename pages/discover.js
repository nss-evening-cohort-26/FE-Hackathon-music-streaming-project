/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import PlaylistCard from '../components/PlaylistCard';
import { getAllPlaylists } from '../api/PlaylistData';
import { useAuth } from '../utils/context/authContext';

export default function Discover() {
  const [playlists, setPlaylists] = useState([]);

  const { user } = useAuth();
  console.warn('playlists', playlists);

  const getAllUsersPlaylists = () => {
    getAllPlaylists(user.id).then(setPlaylists);
  };

  useEffect(() => {
    getAllUsersPlaylists();
  }, []);

  return (
    <div className="flex flex-col" style={{ width: '100%' }}>
      <h2 className="cute purple text-center mt-3">So Hot Right Now</h2>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {playlists.length === 0 ? <h1 style={{ textAlign: 'center', color: 'white', width: '100%' }}>There are no public playlists </h1> : playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlistObj={playlist} onUpdate={getAllUsersPlaylists} user={user.id} />
        ))}
      </div>
    </div>
  );
}
