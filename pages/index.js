/* eslint-disable @next/next/no-img-element */
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { getAllPlaylists } from '../api/PlaylistData';
import PlaylistCard from '../components/PlaylistCard';

function Home() {
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getAllPlaylists(1).then(setPlaylists);
  }, []);

  return (
    <>
      <div className="flex flex-col pt-3">
        <img
          style={{
            alignSelf: 'self-start', zIndex: '6', width: '30em', filter: 'drop-shadow(0 2px 2px white',
          }}
          alt="Y2Play logo"
          src="./logoclear.png"
        />
        <img
          style={{
            rotate: '45deg', position: 'absolute', right: '30%', bottom: '30%', filter: 'drop-shadow(30px 10px 8px #242124)',
          }}
          alt="big blob"
          src="./blob.png"
        />
        <Button style={{ position: 'absolute', bottom: '25%', left: '20%' }} className="xbutton audio">Make a playlist</Button>
      </div>
      <div>
        <img style={{ width: '100px', rotate: '15deg', filter: 'drop-shadow(10px 10px 6px #242124)' }} alt="small blob" src="./blob.png" />
        <img style={{ width: '300px', rotate: '-30deg', filter: 'drop-shadow(0 60px 20px #242124)' }} alt="blob" src="./blob.png" />
        <div className="card-box position-absolute onTop flex flex-col text-black">
          <h1>Currently obsessed</h1>
          {playlists.slice(0, 1).map((p) => (
            <PlaylistCard key={p.id} playlistObj={p} onUpdate={getAllPlaylists} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
