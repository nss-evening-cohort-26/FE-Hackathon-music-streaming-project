/* eslint-disable @next/next/no-img-element */
import { Button, Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getAllPlaylists } from '../api/PlaylistData';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  const [playlists, setPlaylists] = useState([]);

  useEffect(() => {
    getAllPlaylists(user.id).then(setPlaylists);
  }, []);

  return (
    <>
      <div className="flex flex-col" style={{ width: '100%', zIndex: '2' }}>
        <div className="flex justify-between flex-nowrap">

          <img
            style={{
              filter: 'drop-shadow(0 2px 2px white', position: 'relative', left: '-50px',
            }}
            alt="Y2Play logo"
            src="./logoclear.png"
          />
          <div className="">
            <img alt="star" src="./stars.png" style={{ filter: 'invert() blur(1.5px)', height: '50px' }} />

            <img
              alt="matrix"
              src="./matrix.png"
              style={{
                position: 'absolute', right: '0px', top: '0', height: '600px', width: '300px', filter: 'blur(.5px) hue-rotate(60deg)', zIndex: '0',
              }}
            />

            <img
              style={{
                width: '100px', height: '100px', rotate: '15deg', filter: 'drop-shadow(10px 10px 6px #242124)',
              }}
              alt="small blob"
              src="./blob.png"
            />
            <div className="flex justify-content-end">

              <img alt="star" src="./stars.png" style={{ filter: 'invert() blur(1px)', height: '50px' }} />
            </div>
          </div>
        </div>
        <div className="flex align-self-end">
          <img alt="star" src="./stars.png" style={{ filter: 'invert() blur(.5px)', height: '50px', margin: '60px 10px 0 0' }} />
          <img
            style={{
              rotate: '70deg', filter: 'drop-shadow(10px -10px 8px #242124)', width: '200px', margin: '-50px 50px 0 0',
            }}
            alt="blob"
            src="./blob.png"
          />

        </div>
        <div className="flex align-self-end">
          <img alt="star" src="./stars.png" style={{ filter: 'invert() blur(1px)', height: '50px' }} />

          <img
            style={{
              width: '300px', position: 'absolute', right: '70px', bottom: '0px', filter: 'drop-shadow(0 60px 20px #242124)', rotate: '-20deg',
            }}
            alt="blob"
            src="./blob.png"
          />
        </div>

      </div>
      <div style={{ position: 'absolute', left: '100px', top: '200px' }}>
        <div className="fave flex flex-col text-black">
          <h2 className="cute">CURRENTLY OBSESSED</h2>
          <div className="flex justify-content-center">

            {playlists.slice(0, 3).map((p) => (
              <Link passHref href={`/playlists/${p.id}`}>
                <Card className="flex song-card" style={{ maxHeight: '200px', margin: '10px', padding: '10px' }}>
                  <Card.Img variant="top" src={p.imageUrl} style={{ maxHeight: '100px', objectFit: 'cover' }} />
                  <Card.Body className="flex justify-content-center">
                    <Card.Title>{p.name}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-content-center mt-5">
          <Link passHref href="/playlist/new">
            <Button style={{ width: '70%' }} className="xbutton audio make">Make a playlist</Button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Home;
