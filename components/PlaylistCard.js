/* eslint-disable import/no-unresolved */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { GrFormView } from 'react-icons/gr';
import { RiEditLine } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';
import PropTypes from 'prop-types';
import PlaylistStyles from '../styles/PlaylistCard.module.css';

export default function PlaylistCard({ playlistObj }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={playlistObj?.imageUrl} />
      <Card.Body>
        <Card.Title>{playlistObj?.name}</Card.Title>
        <Card.Text>
          {playlistObj?.dateCreated}
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

PlaylistCard.propTypes = {
  playlistObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    dateCreated: PropTypes.string,
    isFavorite: PropTypes.bool,
    imageUrl: PropTypes.string,
  }).isRequired,
};
