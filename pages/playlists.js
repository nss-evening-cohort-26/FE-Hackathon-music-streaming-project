/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PlaylistCard from '../components/PlaylistCard';
import { getFavoritePlaylists, getUserPlaylists } from '../api/PlaylistData';
import { useAuth } from '../utils/context/authContext';

export default function ShowPlaylists() {
  const [playlists, setPlaylists] = useState([]);

  const { user } = useAuth();

  const getAllUsersPlaylists = () => {
    getUserPlaylists(user.id).then(setPlaylists);
  };

  const getFavoritePlaylist = () => {
    getFavoritePlaylists(user.id).then(setPlaylists);
    console.warn('fav', getFavoritePlaylists(user.id));
  };

  const newestAndOldest = (sortBy) => {
    getUserPlaylists(user.id)
      .then((userPlaylists) => {
        let sortedPlaylists;
        if (sortBy === 'newest') {
          sortedPlaylists = [...userPlaylists].sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated));
        } else if (sortBy === 'oldest') {
          sortedPlaylists = [...userPlaylists].sort((a, b) => new Date(a.dateCreated) - new Date(b.dateCreated));
        }
        setPlaylists(sortedPlaylists);
      });
  };

  useEffect(() => {
    getAllUsersPlaylists();
    console.warn(getUserPlaylists(user.id));
  }, []);

  return (
    <div style={{ marginLeft: '100px', width: '80%' }}>
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
        <DropdownButton id="dropdown-basic-button" title="Filter">
          <Dropdown.Item href="#/my-playlists" onClick={getAllUsersPlaylists}>All Playlist</Dropdown.Item>
          <Dropdown.Item href="#/favorite" onClick={getFavoritePlaylist}>Favorite Playlist</Dropdown.Item>
          <Dropdown.Item href="#/newest" onClick={() => newestAndOldest('newest')}>Newest</Dropdown.Item>
          <Dropdown.Item href="#/oldest" onClick={() => newestAndOldest('oldest')}>Oldest</Dropdown.Item>
        </DropdownButton>

      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {playlists.length === 0 ? <h1 style={{ textAlign: 'center', color: 'white', width: '100%' }}>You Have No Playlists</h1> : playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlistObj={playlist} onUpdate={getAllUsersPlaylists} />
        ))}
      </div>
    </div>
  );
}
