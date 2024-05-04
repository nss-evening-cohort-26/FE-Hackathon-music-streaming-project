/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getSongsNotOnPlaylist, searchSongs } from '../../api/SongsData';
import PlaylistDetail from '../../components/PlaylistDetail';
import SearchBar from '../../components/SearchBar';

export default function SongsNotInPlaylist() {
  const [songsNotInPlaylist, setSongsNotInPlaylist] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const router = useRouter();
  const { playlist_id, search } = router.query;
  console.warn(router);

  const getAllSongsNotInPlaylist = () => {
    getSongsNotOnPlaylist(playlist_id).then(setSongsNotInPlaylist);
  };

  const getSearchResults = async () => {
    const payload = {
      playlistId: playlist_id,
      searchInput: search.toLowerCase(),
    };
    console.warn(payload);
    // console.warn(payload);
    const filteredResults = await searchSongs(payload);
    setSearchResults(filteredResults);
  };

  useEffect(() => {
    getAllSongsNotInPlaylist();
    getSearchResults();
  }, []);

  return (
    <div>
      <div className="text-center" style={{ marginLeft: '100px', width: '80%' }}>
        <Link href={`/playlist/${playlist_id}`} passHref>
          <Button
            className="info"
            style={{
              marginTop: '15px',
              backgroundColor: '#B6A39E',
              color: 'black',
              border: 'none',
            }}
          >
            Back To Playlist
          </Button>
        </Link>
      </div>
      <SearchBar onSearch={getSearchResults} />
      <div className="d-flex flex-wrap" style={{ marginLeft: '0 auto' }}>
        {
        (searchResults.map((songObject) => (
          <PlaylistDetail key={songObject.id} songObj={songObject} onUpdate={getSearchResults} />)))
      }
      </div>
      <div style={{ borderTop: '5px solid black', width: '93%' }} />
      <div className="d-flex flex-wrap" style={{ marginLeft: '0 auto' }}>
        {songsNotInPlaylist.map((songObject) => (
          <PlaylistDetail key={songObject.id} songObj={songObject} onUpdate={getAllSongsNotInPlaylist} />
        ))}
      </div>
    </div>
  );
}
