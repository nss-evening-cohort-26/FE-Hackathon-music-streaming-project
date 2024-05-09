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
    <Card className="playlist-card" style={{ width: '18rem', margin: '20px 20px', flex: '0 1 30%' }}>
      <Card.Img variant="top" src={playlistObj.imageUrl} style={{ height: '300px', objectFit: 'cover' }} />
      <Card.Body style={{ padding: '6px 0 0 0' }}>
        <Card.Title className="audio">{playlistObj.name}</Card.Title>
        <Card.Text className="text">
          Created on: {formattedDate}
        </Card.Text>
        {router.asPath === '/discover' && (
        <Card.Text>
          Created by: {playlistObj.userName}
        </Card.Text>
        )}
        <div className="flex justify-content-evenly mt-2">
          <Link href={`/playlist/${playlistObj.id}`} passHref><Button className="jelly" style={{ filter: 'hue-rotate(50deg)', padding: '2px 8px' }}><GrFormView /></Button></Link>
          {playlistObj.userId === user.id && (
          <>
            <Link href={`/playlist/edit/${playlistObj.id}`} passHref>
              <Button className="jelly" style={{ filter: 'hue-rotate(90deg)', padding: '2px 8px' }}><RiEditLine /></Button>
            </Link>
            <Button className="jelly" style={{ padding: '2px 8px' }} onClick={deleteThisPlaylist}><MdDeleteForever /></Button>
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
