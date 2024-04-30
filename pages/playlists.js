/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import PlaylistCard from '../components/PlaylistCard';
import { getAllPlaylists } from '../API/PlaylistData';
import { useAuth } from '../utils/context/authContext';

export default function ShowPlaylists() {
  const [playlists, setPlaylists] = useState([]);

  const { user } = useAuth();

  const getAllThePlaylists = () => {
    getAllPlaylists(user.id).then(setPlaylists);
  };

  useEffect(() => {
    getAllThePlaylists();
    console.warn(user);
  }, []);

  return (
    <div className="d-flex justify-content-center align-items-center">
      {playlists.length === 0 ? <h1 style={{ textAlign: 'center', color: 'white', width: '100%' }}>You Have No Playlists</h1> : playlists.map((playlist) => (
        <PlaylistCard key={playlist.id} playlistObj={playlist} onUpdate={getAllThePlaylists} />
      ))}
    </div>
  );
}
