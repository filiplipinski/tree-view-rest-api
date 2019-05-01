import React, { Component } from 'react';
import Container from './Container';
import LoadingText from './LoadingText'
import Category from './Category';
import api from '../../services/api';


class Categories extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    api.get().then(data => {
      data.map(single_data => {
        // Adding property 'childVisible', which specify if category is expanded ( and subcategories are visible ) or not.
        // By default, only root category has childs visible
        if (single_data.id === 1) single_data.childVisible = true;
        else single_data.childVisible = false;
        return data;
      });
      data.sort((a, b) => (a.ordering - b.ordering));
      this.setState({ data });
      // console.log(data);
    });
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

    return data.filter(cat => cat.parent_id === single_cat.id);
  }

  toggleVisibility = (single_cat) => {
    const newData = [...this.state.data];

    newData.map(data => {
      if (data.id === single_cat.id) data.childVisible = !data.childVisible;
      return data;
    });
    this.setState({ data: newData });
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
      ));
    }

    return (
      <Container>
        {rootReactElem ? rootReactElem : <LoadingText>Ładowanie kategorii...</LoadingText>}
      </Container >
    )
  }
}

export default Categories;