import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { useAuth } from '../../utils/context/authContext';
import { createPlaylist, updatePlaylist } from '../../api/PlaylistData';

const initialValue = {
  name: '',
  imageUrl: '',
  isFavorite: false,

};

export default function PlaylistForm({ playObj }) {
  const [formInput, setFormInput] = useState(initialValue);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (playObj?.id) setFormInput(playObj);
  }, [playObj]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playObj.id) {
      updatePlaylist(playObj.id, formInput).then(() => router.push(`/playlist/${playObj.id}`));
    } else {
      const payload = { ...formInput };
      createPlaylist(payload, user.id)?.then(router.push('/playlists'));
      console.warn(payload);
    }
  };

  return (
    <div style={{ marginLeft: '200px', width: '80%' }}>
      <Form onSubmit={handleSubmit}>
        <h2 className="text-white mt-5">{playObj.id ? 'Update' : 'Create'} Playlist</h2>
        <Form.Group className="mb-3" controlId="floatingInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Playlist Name..."
            name="name"
            value={formInput.name}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="floatingInput1">
          <Form.Label>Image</Form.Label>
          <Form.Control
            type="url"
            placeholder="Image URL of the playlist..."
            name="imageUrl"
            value={formInput.imageUrl}
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className="text-white mt-5"
            type="switch"
            label="Is this your favorite Playlist?"
            name="isFavorite"
            checked={formInput.isFavorite}
            onChange={(e) => {
              setFormInput((prevState) => ({
                ...prevState,
                isFavorite: e.target.checked,
              }));
            }}
          />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className="text-white mt-5"
            type="switch"
            label="Do you want to make this team public?"
            name="public"
            checked={input.is_public}
            onChange={(e) => {
              setInput((prevState) => ({
                ...prevState,
                public: e.target.checked,
              }));
            }}
          />
        </Form.Group> */}
        <Button style={{ marginTop: '15px' }} type="submit">{playObj.id ? 'Update' : 'Create'} Playlist</Button>
      </Form>
    </div>
  );
}

PlaylistForm.propTypes = {
  playObj: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
    isFavorite: PropTypes.bool,
    userId: PropTypes.number,
  }),
};

PlaylistForm.defaultProps = {
  playObj: initialValue,
};
