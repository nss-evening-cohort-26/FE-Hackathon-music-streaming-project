/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <>
      <div
        id="nav"
        className="fixed inset-y-0 z-10 flex w-60"
      >
        <svg
          id="bar"
          className="absolute inset-0 w-full h-full text-white"
          style={{ filter: 'drop-shadow(10px 0 10px #00000030)' }}
          preserveAspectRatio="none"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 430.7 800"
        >
          <path d="M 268.487 0 H 0 V 800 H 247.32 Q 400 735 311 643 Q 120 446 268.487 367.647 Q 593 190 268.487 0 Z" fill="#FFFFFF" />
        </svg>
        <div className="z-10 flex flex-col flex-1">
          <div className="flex items-center justify-between flex-shrink-0 w-64 p-4">
            <Link style={{ color: 'black' }} passHref href="/">Home

            </Link>
          </div>

        </div>

      </div>
    </>
  );
}
