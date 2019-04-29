import React, { useState } from 'react';
import Form from './Form';
import styled from 'styled-components';
import { MdChevronRight, MdExpandMore } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';

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

const StyledEditIcon = styled.div`
  font-size: 25px;
  margin-left: 10px;
  cursor: pointer;

  :hover{
    color:  ${({ theme }) => theme.colors.icon_hover};
    transform: scale(1.2);    
  }
`

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-bottom: 1px solid black;   
`

const Category = (props) => {
  const { single_cat, getChildCat, depth, toggleVisibility, updateState} = props;
  const [renderForm, setRenderForm] = useState(false);

  const childs = getChildCat(single_cat).map(child => (
    <Category
      key={child.id}
      single_cat={child}
      getChildCat={getChildCat}
      toggleVisibility={toggleVisibility}
      updateState={updateState}
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

          <StyledEditIcon onClick={() => setRenderForm(!renderForm)}>
            <FaRegEdit />
          </StyledEditIcon>

          {renderForm && <Form single_cat={single_cat} closeForm={() => setRenderForm(!renderForm)} updateState={updateState}/>}
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