/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';

export default function NavBar() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div id="menu">
      <Button
        type="button"
        onClick={handleShow}
        style={{ margin: '8px' }}
      >Open
      </Button>
      <div
        id="nav"
        className={show ? 'w-60 fixed inset-y-0 z-10 flex flex-col' : 'hidden'}

      >
        <Button
          type="button"
          onClick={handleClose}
          style={{ width: '50px', zIndex: '20', margin: '8px' }}
        >X
        </Button>
        <svg
          id="bar"
          className={show ? 'absolute inset-0 w-full h-full text-white' : 'hidden'}
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
        <div className="z-20 flex flex-col flex-1">
          <div className="audio flex items-center justify-between flex-shrink-0 w-64 p-4 mt-2">
            <Link style={{ color: 'black' }} passHref href="/">Y2Play
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
