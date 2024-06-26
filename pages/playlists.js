/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import PlaylistCard from '../components/PlaylistCard';
import { getUserPlaylists } from '../api/PlaylistData';
import { useAuth } from '../utils/context/authContext';

export default function ShowPlaylists() {
  const [playlists, setPlaylists] = useState([]);
  const [filter, setFilter] = useState('all');

  const { user } = useAuth();

  const getAllUsersPlaylists = () => {
    getUserPlaylists(user.id).then((data) => {
      const filteredData = filter === 'favorites' ? data.filter((p) => p.isFavorite) : data;
      setPlaylists(filteredData);
    });
  };

  // const getAllUsersPlaylists = () => {
  //   getUserPlaylists(user.id).then((data) => {
  //     if (filter === 'favorites') {
  //       setPlaylists(data.filter((playlist) => playlist.isFavorite));
  //       console.warn(data.filter((playlist) => playlist.isFavorite), 'fav');
  //     } else {
  //       setPlaylists(data);
  //     }
  //   });
  // };

  // const getFavoritePlaylist = () => {
  //   getFavoritePlaylists(user.id).then(setPlaylists);
  //   console.warn('fav', getFavoritePlaylists(user.id));
  // };

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
  }, [filter]);

  return (

    <div className="flex flex-col" style={{ width: '100%' }}>
      <div className="flex audio text-center justify-content-end mt-4"> {/* Wrapper div for centering */}
        <Link href="/playlist/new" passHref>
          <Button
            className="xbutton"
          >
            <span>Add a Playlist</span>
          </Button>
        </Link>
        <div className="relative-container">
          <DropdownButton className="audio xbutton" style={{ filter: 'hue-rotate(260deg)', marginLeft: '15px', zIndex: '1' }} id="dropdown-basic-button" title="Filter">
            <Dropdown.Item href="#/my-playlists" onClick={() => setFilter('all')}>All Playlists</Dropdown.Item>
            <Dropdown.Item href="#/favorites" onClick={() => setFilter('favorites')}>Favorite Playlist</Dropdown.Item>
            <Dropdown.Item href="#/newest" onClick={() => newestAndOldest('newest')}>Newest</Dropdown.Item>
            <Dropdown.Item href="#/oldest" onClick={() => newestAndOldest('oldest')}>Oldest</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        {playlists == null ? <h1 style={{ textAlign: 'center', color: 'white', width: '100%' }}>You Have No Playlists</h1> : playlists.map((playlist) => (
          <PlaylistCard key={playlist.id} playlistObj={playlist} onUpdate={getAllUsersPlaylists} />
        ))}
      </div>
    </div>

  );
}
