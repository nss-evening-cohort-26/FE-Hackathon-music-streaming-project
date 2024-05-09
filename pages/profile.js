/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import { useAuth } from '../utils/context/authContext';

export default function Profile() {
  const { user } = useAuth();

  // Function to manipulate the photo URL to change the size
  const getLargerPhotoUrl = (url) => {
    // Split the URL at '='
    const parts = url.split('=');
    // Check if there are enough parts
    if (parts.length === 2) {
      // Replace the existing size value with 's200' for a larger photo
      return `${parts[0]}=s300`; // Change '200' to your desired size
    }
    // Return the original URL if it doesn't match the expected format
    return url;
  };

  return (
    <>
      <div style={{
        marginTop: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center',
      }}
      >
        <Image src={getLargerPhotoUrl(user.fbUser.photoURL)} alt="Profile" className="profile-photo" width={300} height={300} quality={100} />
        <h1 style={{ color: 'white', textShadow: '0 0 3px black' }}>{user.username}</h1>
        <div className="bio" style={{ overflow: 'hidden', width: '70%', position: 'relative' }}>
          <h2
            className="audio text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600"
            style={{
              margin: 0, whiteSpace: 'nowrap', position: 'absolute', animation: 'scrollText 8s linear infinite',
            }}
          >{user.bio}
          </h2>
        </div>
      </div>
      <style jsx>{`
        @keyframes scrollText {
          0% { left: 100%; }
          100% { left: -100%; }
        }
      `}
      </style>
    </>
  );
}
