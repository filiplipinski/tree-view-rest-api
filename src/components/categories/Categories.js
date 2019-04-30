import React, { Component } from 'react';
import Container from './Container';
import Category from './Category';
import api from '../../services/api';


class Categories extends Component {
  state = {
    data: [],
  }

  doesRemovalConfirmed = false;

  componentDidMount() {
    api.get().then(data => {
      data.map(single_data => {
        // Adding property 'childVisible' which specify if category is expanded ( and subcategories are visible ) or not.
        if (single_data.id === 1) single_data.childVisible = true;
        else single_data.childVisible = false;
        return data;
      });
      data.sort((a, b) => (a.ordering - b.ordering));
      this.setState({ data });
      console.log(data)
    });


    // temporary:
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
    //   if (data.id === 1) data.childVisible = true;
    //   else data.childVisible = false;
    //   return data;
    // });
    // fakeData.sort((a, b) => (a.ordering - b.ordering));

    // this.setState({ data: fakeData });
  }

  updateState = (updatedCat) => {
    const modifiedCat = this.state.data.map(cat => {
      if (cat.id === updatedCat.id) {
        cat.parent_id = updatedCat.parent_id;
        cat.name = updatedCat.name;
        cat.description = updatedCat.description;
        cat.is_visible = updatedCat.is_visible;
        cat.ordering = updatedCat.ordering;
      }
      return cat
    });

    this.setState({ data: modifiedCat });
  }

  addToState = (newCat) => {
    this.setState(prevState => ({
      data: [...prevState.data, newCat],
    }));
  }

  deleteCatFromState = (catToDelete) => {
    api.delete(catToDelete).then(response => {
      if (response) {
        let dataWithoutSingleCat = [...this.state.data];

        const indexToDelete = dataWithoutSingleCat.findIndex(data => data.id === catToDelete);
        dataWithoutSingleCat.splice(indexToDelete, 1);

        this.setState({ data: dataWithoutSingleCat });
      }
    });
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
    let rootReactElem = null;

    if (this.state.data.length !== 0) {
      const root = this.state.data.filter(cat => cat.id === 1);

      rootReactElem = root.map(single_cat => (
        <Category
          key={single_cat.id}
          single_cat={single_cat}
          getChildCat={this.getChildCat}
          toggleVisibility={this.toggleVisibility}
          updateState={this.updateState}
          addToState={this.addToState}
          deleteCatFromState={this.deleteCatFromState}
        />
      ))
    }

    return (
      <Container>
        {rootReactElem ? rootReactElem : <p>Ładowanie...</p>}
      </Container >
    )
  }
}

export default Categories;