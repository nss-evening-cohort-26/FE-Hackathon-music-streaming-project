/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Button } from 'react-bootstrap';
import { signIn } from '../utils/auth';

function Signin() {
  return (
    <>
      <div
        className="text-center d-flex flex-column justify-content-center align-content-center"
        style={{
          height: '90vh',
          padding: '30px',
          margin: '0 auto',
          zIndex: 1,
          minHeight: '25rem',
          width: '80%',
          minWidth: '30rem',
          paddingBlock: '0 5rem',
        }}
      >
        <div className="row justify-content-center align-items-center">
          <img
            style={{
              zIndex: '6', width: '30em', filter: 'drop-shadow(0 2px 2px white)',
            }}
            alt="Y2Play logo"
            src="./logoclear.png"
          />
        </div>
        <div className="row justify-content-center">
          <Button style={{ width: '50%' }} className="xbutton audio" onClick={signIn}>Sign In</Button>
        </div>
      </div>
    </>
  );
}

export default Signin;
