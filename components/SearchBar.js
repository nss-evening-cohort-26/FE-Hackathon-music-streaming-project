/* eslint-disable no-undef */
// import { useRouter } from 'next/router';
// import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import PropTypes from 'prop-types';

export default function SearchBar({ onSearch }) {
  const handleChange = (e) => {
    onSearch(e.target.value.toLowerCase());
  };

  return (
    <Form className="d-flex text" style={{ width: '60%', margin: '0 auto', height: '50px' }}>
      <Form.Control
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        name="search"
        onChange={handleChange}
      />
    </Form>

  );
  // export default function SearchBar() {
  //   const [searchInput, setSearchInput] = useState();

  //   const handleChange = (e) => {
  //     const { name, value } = e.target;

  //     setSearchInput((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };

  //   return (
  //     <Form className="d-flex" style={{ width: '40%', margin: '0 auto' }}>
  //       <Form.Control
  //         type="search"
  //         placeholder="Search"
  //         className="me-2"
  //         aria-label="Search"
  //         name="search"
  //         value={searchInput?.search}
  //         onChange={handleChange}
  //       />
  //       <Button variant="success" type="submit" style={{ marginRight: '10px' }}>Search</Button>
  //     </Form>

//   );
}

SearchBar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};
