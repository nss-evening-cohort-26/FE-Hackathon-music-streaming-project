/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { GrFormView } from 'react-icons/gr';
import { RiEditLine } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PlaylistStyles from '../styles/PlaylistCard.module.css';
import { deletePlaylist } from '../api/PlaylistData';
import { useAuth } from '../utils/context/authContext';

export default function PlaylistCard({ playlistObj, onUpdate }) {
  const router = useRouter();
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
    <Card className="playlist-card" style={{ width: '18rem', margin: '20px 20px' }}>
      <Card.Title className="audio" style={{ marginBottom: '15px', fontSize: '30px' }}>{playlistObj.name}</Card.Title>
      <Card.Img variant="top" src={playlistObj.imageUrl} style={{ height: '300px', objectFit: 'cover' }} />

      <Card.Body style={{ padding: '6px 0 0 0', lineHeight: '1', marginTop: '10px' }}>
        <Card.Text style={{ fontSize: '30px' }} className="cute">
          <strong>Created on:</strong> {formattedDate}
        </Card.Text>
        {router.asPath === '/discover' && (
        <Card.Text className="cute" style={{ fontSize: '30px' }}>
          <strong>Created by:</strong> {playlistObj.userName}
        </Card.Text>
        )}

        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
          <Link href={`/playlist/${playlistObj.id}`} passHref><Button style={{ backgroundColor: '#AFD9FC' }} variant="warning" className={`view playlist-card-button ${PlaylistStyles.spaceBtn}`}><GrFormView style={{ color: 'white' }} /></Button></Link>
          {playlistObj.userId === user.id && (
          <>
            <Link href={`/playlist/edit/${playlistObj.id}`} passHref>
              <Button style={{ backgroundColor: '#DAB1D8' }} variant="success" className={`edit playlist-card-button ${PlaylistStyles.spaceBtn}`}><RiEditLine /></Button>
            </Link>
            <Button variant="danger" className={`delete playlist-card-button ${PlaylistStyles.spaceBtn}`} onClick={deleteThisPlaylist} style={{ backgroundColor: '#C84088' }}><MdDeleteForever /></Button>
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
