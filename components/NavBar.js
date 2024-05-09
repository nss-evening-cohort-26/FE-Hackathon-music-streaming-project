/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { IoMdMenu } from 'react-icons/io';
import { signOut } from '../utils/auth';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const toggleOpen = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };

  return (
    <div id="menu">

      <img
        alt="matrix"
        src="/matrix.png"
        style={{
          position: 'absolute', height: '500px', width: '200px', left: '-60px', top: '0px', filter: 'blur(.5px) hue-rotate(60deg)', transform: 'rotateY(180deg)',
        }}
      />
      <Button
        id="toggle"
        className="xbutton"
        type="button"
        onClick={toggleOpen}
        style={{ zIndex: '20' }}
      >
        {!open
          ? (
            <IoMdMenu
              style={{ filter: 'drop-shadow(0 2px 2px hsla(290, 100%, 20%, 1))' }}
            />
          )
          : <span>⬅</span>}
      </Button>
      <div
        id="nav"
        className={open ? 'open fixed inset-y-0 z-10 flex flex-col align-items-start' : 'hidden fixed inset-y-0 z-10 flex flex-col align-items-start'}

      >
        <svg
          id="bar"
          className="absolute inset-0 w-full h-full text-white"
          style={{ filter: 'drop-shadow(10px 0 10px #2C2C2C)' }}
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 430.7 800"
        >
          <defs>
            <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
              <stop offset="10%" stopColor="#FFFFFF" />
              <stop offset="100%" stopColor="#787A91" />
            </radialGradient>
          </defs>
          <path d="M 268.487 0 H 0 V 800 H 247.32 Q 400 735 311 643 Q 120 446 268.487 367.647 Q 593 190 268.487 0 Z" fill="url(#gradient)" stroke="#2C2C2C" strokeWidth="3" strokeOpacity="0.4" />
        </svg>
        <div id="links" className="z-10 flex flex-col flex-1 p-1 justify-between">
          <div className="cute flex flex-col flex-shrink-0 w-64 p-3">
            <Link style={{ color: 'black' }} passHref href="/">Home</Link>
            <Link style={{ color: 'black' }} passHref href="/playlists">My Playlists</Link>
            <Link style={{ color: 'black' }} passHref href="/profile">Profile</Link>
            {/* </div> */}
            <Link style={{ color: 'black' }} passHref href="/discover">Discover</Link>
          </div>
          <div className="cute w-64 p-3 mb-5 flex flex-nowrap">
            <Button className="jelly" onClick={signOut}>
              SIGN OUT
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
