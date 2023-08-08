import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Form inline className="mt-3 mb-4">
      <FormControl type="text" placeholder="Search Jobs..." className="mr-sm-2" />
      <Button variant="primary">Search</Button>
    </Form>
  );
};

export default SearchBar;
