/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { GrFormView } from 'react-icons/gr';
import { RiEditLine } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';
import PlaylistStyles from '../styles/PlaylistCard.module.css';

export default function PlaylistCard() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://img.freepik.com/premium-vector/summer-music-playlist-cover-concept-with-realistic-vinyl-disk-mockup-with-summer-sunset-cover_148087-455.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Date Created: 00/00/00
        </Card.Text>
        <div style={{
          marginRight: '10px',
        }}
        >
          <Button variant="warning" className={PlaylistStyles.spaceBtn}><GrFormView /></Button>
          <Button variant="success" className={PlaylistStyles.spaceBtn}><RiEditLine /></Button>
          <Button variant="danger" className={PlaylistStyles.spaceBtn}><MdDeleteForever /></Button>
        </div>
      </Card.Body>
    </Card>
  );
}
