/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { GrFormView } from 'react-icons/gr';
import { RiEditLine } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';
import PropTypes from 'prop-types';
import Link from 'next/link';
import PlaylistStyles from '../styles/PlaylistCard.module.css';
import { deletePlaylist } from '../api/PlaylistData';
import { useAuth } from '../utils/context/authContext';

export default function PlaylistCard({ playlistObj, onUpdate }) {
  const { user } = useAuth();

  const deleteThisPlaylist = () => {
    if (window.confirm(`Sure you want to delete ${playlistObj.name}?`)) {
      deletePlaylist(playlistObj.id).then(() => onUpdate());
    }
  };

  const formattedDate = new Date(playlistObj.dateCreated).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  });

  return (
    <Card className="playlist-card" style={{ width: '18rem', margin: '20px 20px', flex: '0 1 30%' }}>
      <Card.Img variant="top" src={playlistObj.imageUrl} style={{ height: '300px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>{playlistObj.name}</Card.Title>
        <Card.Text>
          Created on: {formattedDate}
        </Card.Text>
        <div style={{
          marginRight: '10px',
        }}
        >
          <Link href={`/playlist/${playlistObj.id}`} passHref><Button variant="warning" className={PlaylistStyles.spaceBtn}><GrFormView /></Button></Link>
          {playlistObj.userId === user.id && (
          <>
            <Link href={`/playlist/edit/${playlistObj.id}`} passHref>
              <Button variant="success" className={PlaylistStyles.spaceBtn}><RiEditLine /></Button>
            </Link>
            <Button variant="danger" className={PlaylistStyles.spaceBtn} onClick={deleteThisPlaylist}><MdDeleteForever /></Button>
          </>
          )}
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
    userId: PropTypes.number,
    userName: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};
