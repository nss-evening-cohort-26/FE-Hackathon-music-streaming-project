/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import { Card } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getUserPlaylists } from '../api/PlaylistData';
import { useAuth } from '../utils/context/authContext';

function Home() {
  const { user } = useAuth();
  const [playlists, setPlaylists] = useState([]);

  const getAllUsersFavPlaylists = () => {
    getUserPlaylists(user.id).then((data) => {
      const filteredData = data.filter((p) => p.isFavorite);
      setPlaylists(filteredData);
    });
  };

  useEffect(() => {
    getAllUsersFavPlaylists();
  }, []);

  return (
    <>
      <div className="flex flex-col" style={{ width: '100%', zIndex: '2' }}>
        <div className="flex justify-between flex-nowrap">

          <img
            style={{
              filter: 'drop-shadow(0 2px 2px white', position: 'absolute', left: '9em', zIndex: '10',
            }}
            alt="Y2Play logo"
            src="./logoclear.png"
          />
          <div className="">
            <img
              alt="star"
              src="./stars.png"
              style={{
                filter: 'invert() blur(1.5px)', height: '50px', position: 'absolute', right: '150px',
              }}
            />

            <img
              alt="matrix"
              src="./matrix.png"
              style={{
                position: 'absolute', right: '0px', top: '0', height: '600px', width: '300px', filter: 'blur(.5px) hue-rotate(60deg)', zIndex: '0',
              }}
            />

            <img
              style={{
                width: '100px', height: '100px', rotate: '15deg', filter: 'drop-shadow(10px 10px 6px #242124)', position: 'absolute', top: '1em', right: '4em',
              }}
              alt="small blob"
              src="./blob.png"
            />
            <div className="flex justify-content-end">

              <img
                alt="star"
                src="./stars.png"
                style={{
                  filter: 'invert() blur(1px)', height: '50px', position: 'absolute', right: '300px', top: '100px',
                }}
              />
            </div>
          </div>
        </div>
        <div className="flex align-self-end">
          <img
            alt="star"
            src="./stars.png"
            style={{
              filter: 'invert() blur(.5px)', height: '50px', position: 'absolute', right: '15%', bottom: '50%',
            }}
          />
          <img
            style={{
              rotate: '70deg', filter: 'drop-shadow(10px -10px 8px #242124)', width: '200px', position: 'absolute', right: '1em', top: '9em',
            }}
            alt="blob"
            src="./blob.png"
          />

        </div>
        <div className="flex align-self-end">
          <img
            alt="star"
            src="./stars.png"
            style={{
              filter: 'invert() blur(1px)', height: '50px', position: 'absolute', right: '50px', bottom: '40%',
            }}
          />

          <img
            style={{
              width: '300px', position: 'absolute', right: '70px', bottom: '20px', filter: 'drop-shadow(0 60px 20px #242124)', rotate: '-20deg',
            }}
            alt="blob"
            src="./blob.png"
          />
          <div>
            <img
              alt="star"
              src="./stars.png"
              style={{
                filter: 'invert() blur(1px)', height: '50px', position: 'absolute', right: '25%', bottom: '10%',
              }}
            />
          </div>
          <div>
            <img
              alt="star"
              src="./stars.png"
              style={{
                filter: 'invert() drop-shadow(3px 2px 7px gray)', height: '50px', position: 'absolute', right: '10%', bottom: '20%',
              }}
            />
          </div>
        </div>

      </div>
      <div
        className="flex"
        style={{
          zIndex: '4', position: 'absolute', top: '20%', right: '20%', width: '75%', justifyContent: 'flex-end', gap: '50px',
        }}
      >
        <div className="fave flex flex-col">
          <h2 className="cute purple">Artist of the Moment</h2>
          <Card
            className="flex flex-col"
            style={{
              width: '13em', margin: '10px', padding: '20px', flex: '0 1 30%', justifyContent: 'space-evenly', backgroundColor: 'rgba(255, 255, 255, 0.377)',
            }}
          >
            <Card.Img variant="top" src="/britney.jpg" style={{ height: '150px', objectFit: 'cover' }} />
            <Card.Body className="flex" style={{ padding: '6px 0 0 0' }}>
              <h2 className="cute" style={{ fontSize: '40px' }}>Britney Spears</h2>
            </Card.Body>
          </Card>
        </div>
        <div className="fave flex flex-col text-black">
          <h2 className="cute purple">Currently Obsessed</h2>
          <div className="flex justify-content-center">

            {playlists.slice(0, 3).map((p) => (
              <Link passHref href={`/playlist/${p.id}`}>
                <Card
                  className="flex flex-col"
                  style={{
                    width: '18em', margin: '10px', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.377)',
                  }}
                >
                  <Card.Img variant="top" src={p.imageUrl} style={{ height: '300px', objectFit: 'cover' }} />
                  <Card.Body className="flex flex-col" style={{ padding: '6px 0 0 0' }}>
                    <h2 className="cute" style={{ fontSize: '40px' }}>{p.name}</h2>
                  </Card.Body>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div
        className="flex flex-col position-absolute"
        style={{ left: '6em', bottom: '11%', zIndex: '6' }}
      >
        <Link passHref href="/playlist/new">

          <button
            type="button"
            className="make cute z-1"
          >
            <img
              alt="make a playlist button"
              src="/blob.png"
              style={{
                position: 'relative',
                zIndex: '10',
                width: '250px',
                filter: 'saturate(4) hue-rotate(30deg) drop-shadow(-20px -20px 20px #242124)',
                rotate: '160deg',
              }}
            />
            <h2
              className="audio position-absolute z-20"
              style={{
                left: '30%', bottom: '40%', textShadow: '-1px -1px  3px white', fontSize: '35px',
              }}
            >Start
            </h2>
          </button>
        </Link>
      </div>
    </>
  );
}

export default Home;
