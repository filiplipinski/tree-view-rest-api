import React, { Component } from 'react';
import api from '../../services/api';
import styled from 'styled-components';
import { IoIosCloseCircleOutline } from 'react-icons/io';


const StyledForm = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(calc( 100% + 15px ));
  border-radius: 6px;
  padding: 30px 10px 10px;
  background-color: ${({ theme }) => theme.colors.title_bgc};
`
const StyledInput = styled.input`
  font-family: 'Montserrat';
  border: none;
  display: block;
  margin: 2px auto;
  padding: 4px;
  color: black;
`
const StyledInputSubmit = styled(StyledInput)`
  margin: 10px auto 0;
  background-color: ${({ theme }) => theme.colors.title};
  font-weight: ${({ theme }) => theme.font.semi_bold};
  border: none;
  border-radius: 12px;
  padding: 5px 10px;
  color: ${({ theme }) => theme.colors.title_bgc};
  transition: .3s;
  cursor: pointer;

  :hover{
    color: ${({ theme }) => theme.colors.title};
    background-color: ${({ theme }) => theme.colors.title_bgc};
    box-shadow: 0 0 0px 1px inset ${({ theme }) => theme.colors.title};
  }
`;

const StyledX = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  font-size: 25px;
  height: 25px;
  width: 25px;
  color: ${({ theme }) => theme.colors.title};
  cursor: pointer;
  transition: .3s;

  :hover{
    transform: scale(1.2) rotate(180deg);
  }
`

const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 10px;
`

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