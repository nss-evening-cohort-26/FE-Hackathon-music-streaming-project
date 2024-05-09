/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable camelcase */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from 'react-bootstrap';
import { getSongsNotOnPlaylist } from '../../api/SongsData';
import PlaylistDetail from '../../components/PlaylistDetail';
import SearchBar from '../../components/SearchBar';

export default function SongsNotInPlaylist() {
  const [songsNotInPlaylist, setSongsNotInPlaylist] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const router = useRouter();
  const { playlist_id } = router.query;

  const getAllSongsNotInPlaylist = async () => {
    const fetchedSongs = await getSongsNotOnPlaylist(playlist_id);
    setSongsNotInPlaylist(fetchedSongs);
    setSearchResults(fetchedSongs);
  };

  const filterItems = (query) => {
    if (!query) {
      getAllSongsNotInPlaylist();
    } else {
      const filtered = songsNotInPlaylist.filter((song) => song.name.toLowerCase().includes(query)
      || song.artist.name.toLowerCase().includes(query)
      || song.genre.name.toLowerCase().includes(query));
      setSearchResults(filtered);
    }
  };

  useEffect(() => {
    getAllSongsNotInPlaylist();
  }, [router.query]);

  return (
    <div>
      <div className="flex align-items-center mt-4" style={{ justifyItems: 'space-between', marginLeft: '20px' }}>
        <Link href={`/playlist/${playlist_id}`} passHref>
          <Button
            className="audio xbutton text-white"
            style={{ filter: 'hue-rotate(260deg)' }}
          ><span>⬅</span>
          </Button>
        </Link>
        <SearchBar onSearch={filterItems} />
      </div>
      <div className="d-flex flex-wrap" style={{ margin: '0 auto' }}>
        {searchResults.length === 0 ? (<h1 style={{ color: 'firebrick', textAlign: 'center' }}>No results are found</h1>) : searchResults.map((songObject) => (
          <PlaylistDetail key={songObject.id} songObj={songObject} onUpdate={getAllSongsNotInPlaylist} />
        ))}
      </div>
    </div>
  );
}
