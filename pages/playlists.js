/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import PlaylistCard from '../components/PlaylistCard';
import { getUserPlaylists } from '../api/PlaylistData';
import { useAuth } from '../utils/context/authContext';

export default function ShowPlaylists() {
  const [playlists, setPlaylists] = useState([]);

  const { user } = useAuth();

  const getAllUsersPlaylists = () => {
    getUserPlaylists(user.id).then(setPlaylists);
  };

  useEffect(() => {
    getAllUsersPlaylists();
    console.warn(getUserPlaylists(user.id));
  }, []);

  return (
    <div style={{ width: '80%' }}>
      <div className="text-center"> {/* Wrapper div for centering */}
        <Link href="/playlist/new" passHref>
          <Button
            className="info"
            style={{
              marginTop: '15px',
              backgroundColor: '#B6A39E',
              color: 'black',
              border: 'none',
            }}
          >
            Add A Playlist
          </Button>
        </Link>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {playlists.length === 0 ? <h1 style={{ textAlign: 'center', color: 'white', width: '100%' }}>You Have No Playlists</h1> : playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlistObj={playlist} onUpdate={getAllUsersPlaylists} />
        ))}
      </div>
    </div>
  );
}
