/* eslint-disable no-lone-blocks */
import React from 'react';
import { Button } from 'react-bootstrap';

export default function PlaylistDetail() {
  return (
    <div style={{ marginLeft: '200px', width: '80%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '25px' }}>
        <div>
          <h3 className="display-5 mb-3"> Playlist Name</h3>
          <Button variant="success" style={{ borderRadius: '20px', padding: '5px 25px', marginRight: '5px' }}>Edit</Button>
          <Button variant="danger" style={{ borderRadius: '20px', padding: '5px 25px' }}>Delete</Button>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end' }}>
          <Button
            variant="primary"
            style={{
              borderRadius: '20px', padding: '3px 25px', fontSize: '20px', height: '45px',
            }}
          >Add A Song
          </Button>
        </div>
      </div>
      <div className="song-card">
        <div className="song-info">
          <h3 className="song-name">Song Name Placeholder</h3>
          <p className="song-artist">Artist Placeholder</p>
          <p className="song-details">
            <strong>Genre:</strong> Genre Placeholder | <strong>Year:</strong> Year Placeholder | <strong>Duration:</strong> Duration Placeholder
          </p>
        </div>
        <button type="button" className="delete-btn">Delete</button>
      </div>
    </div>
  );
}

{ /* <Card className="mb-3">
<Card.Body className="d-flex justify-content-between align-items-center">
  <div>
    <Card.Title>Song Name Placeholder</Card.Title>
    <Card.Text>Artist Placeholder</Card.Text>
    <Card.Text>
      <strong>Genre:</strong> Genre Placeholder | <strong>Year:</strong> Year Placeholder | <strong>Duration:</strong> Duration Placeholder
    </Card.Text>
  </div>
  <Button variant="danger">Delete</Button>
</Card.Body>
</Card> */ }
