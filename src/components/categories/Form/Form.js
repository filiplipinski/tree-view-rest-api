import React, { Component } from 'react';
import api from '../../../services/api';
import { StyledForm, StyledInput, StyledInputSubmit, StyledX, StyledText } from './FormStyles';
import { IoIosCloseCircleOutline } from 'react-icons/io';


class Form extends Component {
  state = {
    name: "",
    description: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit = () => {
    const { name, description } = this.state;
    const {
      id,
      parent_id,
      ordering,
      name: oldName,
      description: oldDescription } = this.props.single_cat;
    const newOrderingForAddedCat = this.props.biggestOrderingOfChilds + 1;

    if (this.props.editOrAdd === "edit") {
      const data = {
        parent_id,
        name: name ? name : oldName,
        description: description ? description : oldDescription,
        ordering,
        is_visible: true
      }
      if (name === "" && description === "") alert('Podaj dane które chcesz nadpisać.');
      api.put(id, data).then(data => this.props.updateState(data));
    }
    else if (this.props.editOrAdd === "add") {
      const data = {
        parent_id: id,
        name,
        description,
        ordering: newOrderingForAddedCat,
        is_visible: true
      }
      if (name === "") alert('Musisz podać nazwę kategorii którą chcesz dodać.');
      else api.post(data).then(data => this.props.addToState(data));
    }
    else console.log("Error: Invalid props editOrAdd");

    this.props.closeForm();
  }

  render() {
    const { name, description } = this.state;
    const {
      single_cat: {
        name: catName,
        id: catId
      },
      editOrAdd
    } = this.props;

    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <StyledText>
          {editOrAdd === "edit" && (`Edycja kategorii: ${catName}`)}
          {editOrAdd === "add" && catId !== 1 && (`Dodawanie podkategorii do: ${catName}`)}
          {catId === 1 && 'Dodawanie głównej kategorii: '}
        </StyledText>
        <StyledX onClick={this.props.closeForm}> <IoIosCloseCircleOutline />  </StyledX>
        <StyledInput value={name} onChange={this.handleChange} name="name" type="text" placeholder="Nazwa" />
        <StyledInput value={description} onChange={this.handleChange} name="description" type="text" placeholder="Opis" />
        <StyledInputSubmit type="submit" value="Zatwierdź" />
      </StyledForm>
    );
  }
}

export default Form;