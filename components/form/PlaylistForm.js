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
  is_public: false,

};

export default function PlaylistForm({ playObj, onUpdate }) {
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
      createPlaylist(payload, user.id)?.then(() => {
        router.push('/playlists');
        onUpdate();
      });
    }
  };

  return (
    <div
      className="onTop"
    >
      <Form className="text" onSubmit={handleSubmit}>
        <h1 className="text-black mt-5 audio">{playObj.id ? 'Update' : 'Create'} Playlist</h1>
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
            className="text-black"
            type="switch"
            label="Is this a favorite playlist?"
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
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            className="text-black"
            type="switch"
            label="Do you want to make this playlist public?"
            name="public"
            checked={formInput.public}
            onChange={(e) => {
              setFormInput((prevState) => ({
                ...prevState,
                public: e.target.checked,
              }));
            }}
          />
        </Form.Group>
        <div className="flex justify-content-center">
          <Button className="xbutton cute" style={{ fontSize: '30px', marginTop: '15px' }} type="submit">{playObj.id ? 'UPDATE' : 'CREATE'}</Button>
        </div>
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
    public: PropTypes.bool,
    userId: PropTypes.number,
  }),
  onUpdate: PropTypes.func.isRequired,
};

PlaylistForm.defaultProps = {
  playObj: initialValue,
};
