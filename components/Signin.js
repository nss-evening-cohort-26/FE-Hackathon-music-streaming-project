/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <>
      <div className="overlay">
        <img id="overlay" alt="pink lines" src="./depthcore.jpg" />
      </div>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          margin: '0 auto',
          position: 'relative',
          zIndex: '4',
          minHeight: '25rem',
          width: '80%',
          minWidth: '30rem',
          paddingBlock: '0 5rem',
        }}
      >
        <div className="row justify-content-center align-items-center">
          <img
            style={{
              zIndex: '6', width: '40em', filter: 'invert()', marginRight: '30em',
            }}
            alt="Y2Play logo"
            src="./logoclear.png"
          />
        </div>
        <div className="row justify-content-center">
          <Button style={{ width: '25%', marginLeft: '15em' }} className="xbutton audio" onClick={signIn}>Sign In</Button>
        </div>
      </div>
    </>
  );
}

export default Signin;
