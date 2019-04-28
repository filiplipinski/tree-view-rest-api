import React, { Component } from 'react';
import Heading from './Heading';
import Container from './Container';
import Category from './Category';
import api from '../../services/api';


class Categories extends Component {
  state = {
    data: [],
    childVisible: []
  }

  componentDidMount() {
    api.get().then(data => {
      data.map(single_data => {
        single_data.childVisible = false;
        return data;
      });
      this.setState({ data });
      console.log(data);
    });

    //temporary:
    // const fakeData = [{
    //   id: 1,
    //   parent_id: null,
    //   is_visible: true,
    //   name: 'Root',
    //   description: 'Root category',
    //   picture_filename: '',
    //   ordering: 0,
    //   source_id: null,
    //   symbol: null
    // },
    // {
    //   id: 16,
    //   parent_id: 1,
    //   is_visible: true,
    //   name: 'Odzież',
    //   description: 'fsdfssffsdfsd',
    //   picture_filename: '',
    //   ordering: 0,
    //   source_id: null,
    //   symbol: null
    // },
    // {
    //   id: 21,
    //   parent_id: 16,
    //   is_visible: true,
    //   name: 'Bluzki',
    //   description: 'new description here',
    //   picture_filename: '',
    //   ordering: 0,
    //   source_id: null,
    //   symbol: null
    // },
    // {
    //   id: 38,
    //   parent_id: 16,
    //   is_visible: true,
    //   name: 'Sukienki',
    //   description: 'sukienki',
    //   picture_filename: '',
    //   ordering: 1,
    //   source_id: null,
    //   symbol: null
    // },
    // {
    //   id: 19,
    //   parent_id: 16,
    //   is_visible: false,
    //   name: 'Spódnice',
    //   description: 'sdfasdf',
    //   picture_filename: '',
    //   ordering: 2,
    //   source_id: null,
    //   symbol: null
    // },
    // {
    //   id: 39,
    //   parent_id: 16,
    //   is_visible: true,
    //   name: 'Spodnie',
    //   description: 'super spodnie',
    //   picture_filename: '',
    //   ordering: 3,
    //   source_id: null,
    //   symbol: null
    // },
    // {
    //   id: 58,
    //   parent_id: 1,
    //   is_visible: true,
    //   name: 'Akcesoria',
    //   description: 'Drobne dodatki',
    //   picture_filename: 'c5f1044389d63aaedb3a40b80b9b08e6.jpg',
    //   ordering: 1,
    //   source_id: null,
    //   symbol: null
    // },
    // {
    //   id: 53,
    //   parent_id: 58,
    //   is_visible: true,
    //   name: 'Torebki',
    //   description: 'new desc',
    //   picture_filename: '',
    //   ordering: 0,
    //   source_id: null,
    //   symbol: null
    // },
    // {
    //   id: 59,
    //   parent_id: 58,
    //   is_visible: true,
    //   name: 'Szale ',
    //   description: 'what?',
    //   picture_filename: '',
    //   ordering: 1,
    //   source_id: null,
    //   symbol: null
    // },
    // {
    //   id: 26,
    //   parent_id: 59,
    //   is_visible: true,
    //   name: 'Gotyczka',
    //   description: 'gots',
    //   picture_filename: '',
    //   ordering: 0,
    //   source_id: null,
    //   symbol: null
    // },
    // {
    //   id: 17,
    //   parent_id: 1,
    //   is_visible: true,
    //   name: 'Obuwie',
    //   description: 'sezon 2018',
    //   picture_filename: '',
    //   ordering: 2,
    //   source_id: null,
    //   symbol: null
    // },
    // {
    //   id: 27,
    //   parent_id: 17,
    //   is_visible: true,
    //   name: 'Militarne manewry',
    //   description: 'militarne manewry',
    //   picture_filename: '',
    //   ordering: 0,
    //   source_id: null,
    //   symbol: null
    // },
    // {
    //   id: 624,
    //   parent_id: 27,
    //   is_visible: true,
    //   name: 'asdad',
    //   description: 'asd',
    //   picture_filename: '',
    //   ordering: 0,
    //   source_id: null,
    //   symbol: null
    // },
    // {
    //   id: 663,
    //   parent_id: 1,
    //   is_visible: true,
    //   name: 'Koszule',
    //   description: 'Nowa kolekcja koszul',
    //   picture_filename: '',
    //   ordering: 3,
    //   source_id: null,
    //   symbol: null
    // },
    // {
    //   id: 665,
    //   parent_id: 1,
    //   is_visible: true,
    //   name: 'T-shirt',
    //   description: 'test',
    //   picture_filename: '',
    //   ordering: 4,
    //   source_id: null,
    //   symbol: null
    // },
    // {
    //   id: 678,
    //   parent_id: 1,
    //   is_visible: true,
    //   name: 'asd',
    //   description: 'asd',
    //   picture_filename: '',
    //   ordering: 5,
    //   source_id: null,
    //   symbol: null
    // }];

    // fakeData.map(data => {
    //   data.childVisible = false;
    //   return data;
    // });

    // this.setState({ data: fakeData });
  }

  getMainCat = () => {
    const { data } = this.state;

    const rootChilds = data.filter(cat => cat.parent_id === 1);
    rootChilds.sort((a, b) => (a.ordering - b.ordering));

    return rootChilds;
  }

  getChildCat = (single_cat) => {
    const { data } = this.state;

    return data.filter(cat => cat.parent_id === single_cat.id)
  }

  toggleVisibility = (single_cat) => {
    const newData = [...this.state.data];

    newData.map(data => {
      if (data.id === single_cat.id) data.childVisible = !data.childVisible;
      return data;
    });

    this.setState({ data: newData })
  }

  render() {
    let mainCatHTML = null;

    if (this.state.data.length !== 0) {
      const mainCat = this.getMainCat();

      mainCatHTML = mainCat.map(single_cat => (
        <Category
          key={single_cat.id}
          single_cat={single_cat}
          getChildCat={this.getChildCat}
          toggleVisibility={this.toggleVisibility}
        />
      ))
    }
    return (
      <Container>
        <Heading>Kategorie:</Heading>
        {mainCatHTML}
      </Container >
    )
  }
}

export default Categories;