import React from 'react';
import {Form,Button,Container} from "react-bootstrap";

const SearchForm = () => {
    return (
    
    <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Enter city name" />
        </Form.Group>
        <Button variant="warning" type="submit">
          Submit
        </Button>
      </Form>

    
    )
}

export default SearchForm;
