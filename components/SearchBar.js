import React from 'react';
import { Button, Form } from 'react-bootstrap';

export default function SearchBar() {
  return (
    <Form className="d-flex" style={{ width: '40%', margin: '0 auto' }}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        name="search"
      />
      <Button variant="success" type="submit" style={{ marginRight: '10px' }}>Search</Button>
    </Form>

  );
}
