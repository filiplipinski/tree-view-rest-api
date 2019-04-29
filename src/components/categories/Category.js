import React, { useState } from 'react';
import Form from './Form';
import styled from 'styled-components';
import { MdChevronRight, MdExpandMore } from 'react-icons/md';
import { FaRegEdit, FaRegPlusSquare, FaRegTrashAlt } from 'react-icons/fa';

const StyledName = styled.p`
  font-size: 1.5em;
  padding: 5px 40px 5px 0;
  /* font-weight: ${({ theme }) => theme.font.semi_bold}; */
`

const StyledDescription = styled.p`
  font-size: 1em; 
  color: ${({ theme }) => theme.colors.title_bgc};
  font-weight: ${({ theme }) => theme.font.thin};
  margin-bottom: 5px;
`

const StyledCatContainer = styled.div`
  flex-grow: 1;
  padding-left: ${props => `${props.depth * 60}px`};  
  cursor: pointer;
  border-radius: 6px;

  :hover {
    background-color: ${({ theme }) => theme.colors.bgc_hover};
  }
`

const StyledIcon = styled.div`
  font-size: 25px;
  margin-left: 10px;
  cursor: pointer;

  :hover{
    color:  ${({ theme }) => theme.colors.blue};
    transform: scale(1.2);    
  }
`
const StyledAddIcon = styled(StyledIcon)`
  :hover{
    color:  ${({ theme }) => theme.colors.green};
  }
`
const StyledDeleteIcon = styled(StyledIcon)`
  :hover{
    color:  ${({ theme }) => theme.colors.red};
  }
`

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;   
`

const Category = (props) => {
  const { single_cat, getChildCat, depth, toggleVisibility, updateState, addToState, deleteCatFromState } = props;
  const [renderForm, setRenderForm] = useState(false);
  const [editOrAdd, setEditOrAdd] = useState("edit");

  const childs = getChildCat(single_cat).map(child => (
    <Category
      key={child.id}
      single_cat={child}
      getChildCat={getChildCat}
      toggleVisibility={toggleVisibility}
      updateState={updateState}
      addToState={addToState}
      deleteCatFromState={deleteCatFromState}
      depth={depth + 1}
    />
  ))

  const doHaveMoreChilds = () => {
    if (getChildCat(single_cat).length === 0) return false
    else return true
  }

  return (
    <>
      {single_cat.is_visible && (
        <StyledWrapper>
          <StyledCatContainer depth={depth} onClick={() => toggleVisibility(single_cat)}>
            {/* CHHHHHWWIIILOWY ONLICK NA STYLEDNAME !!!!!!!!!! */}
            <StyledName onClick={() => console.log(single_cat)}>
              {doHaveMoreChilds() && (single_cat.childVisible ? <MdExpandMore /> : <MdChevronRight />)}
              {single_cat.name}
            </StyledName>
            <StyledDescription>{single_cat.description}</StyledDescription>

          </StyledCatContainer>

          <StyledAddIcon onClick={() => { setRenderForm(!renderForm); setEditOrAdd("add"); }}>
            <FaRegPlusSquare />
          </StyledAddIcon>

          <StyledIcon onClick={() => { setRenderForm(!renderForm); setEditOrAdd("edit"); }}>
            <FaRegEdit />
          </StyledIcon>

          <StyledDeleteIcon onClick={() => deleteCatFromState(single_cat.id)}>
            <FaRegTrashAlt />
          </StyledDeleteIcon>

          {renderForm && <Form single_cat={single_cat} closeForm={() => setRenderForm(!renderForm)} updateState={updateState} addToState={addToState} editOrAdd={editOrAdd} />}
        </StyledWrapper>
      )}
      {single_cat.childVisible && childs}

    </>
  )
}

Category.defaultProps = {
  depth: 0,
};

export default Category;