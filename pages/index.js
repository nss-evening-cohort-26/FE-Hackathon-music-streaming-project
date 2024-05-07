/* eslint-disable @next/next/no-img-element */
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllPlaylists } from '../api/PlaylistData';
import { useAuth } from '../utils/context/authContext';
import PlaylistCard from '../components/PlaylistCard';

function Home() {
  const { user } = useAuth();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getAllPlaylists(user.id).then(setPlaylists);
  }, []);

  return (
    <>
      <div className="index" style={{ width: '100%' }}>

        <img
          style={{
            filter: 'drop-shadow(0 2px 2px white',
          }}
          alt="Y2Play logo"
          src="./logoclear.png"
        />
        <img
          className="tiny"
          style={{
            width: '100px', height: '100px', rotate: '15deg', filter: 'drop-shadow(10px 10px 6px #242124)',
          }}
          alt="small blob"
          src="./blob.png"
        />

        <img
          className="blob3"
          // style={{
          //   rotate: '45deg', filter: 'drop-shadow(30px 10px 8px #242124)',
          // }}
          alt="big blob"
          src="./blob.png"
        />
        <img className="blob2" style={{ filter: 'drop-shadow(0 60px 20px #242124)' }} alt="blob" src="./blob.png" />
        <Link passHref href="/playlist/new">
          <Button className="xbutton audio make">Make a playlist</Button>
        </Link>
        <div className="fave flex flex-col text-black">
          <h1>Currently obsessed</h1>
          <div className="flex flex-wrap favecard">
            {playlists.slice(0, 3).map((p) => (
              <PlaylistCard playlistObj={p} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
