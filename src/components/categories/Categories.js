import React, { Component } from 'react';
import Heading from './Heading';
import Container from './Container';
import api from '../../services/api';



class Categories extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    api.get().then(data => {
      this.setState({ data })
      console.log(data);
    });
  }
  
  render() {
    return (
      <Container>
        <Heading>Kategorie:</Heading>

      </Container >
    )
  }
}

export default Categories;