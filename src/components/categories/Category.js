import React, { useState } from 'react';
import Form from './Form';
import ConfirmationBox from './ConfirmationBox';
import styled from 'styled-components';
import { MdChevronRight, MdExpandMore } from 'react-icons/md';
import { FaRegEdit, FaRegPlusSquare, FaRegTrashAlt } from 'react-icons/fa';

const StyledName = styled.p`
  font-size: 1.5em;
  padding: 5px 40px 5px 0;
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
const StyledAddMainCatIcon = styled(StyledAddIcon)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  :hover{
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
`

const StyledDeleteIcon = styled(StyledIcon)`
  :hover{
    color:  ${({ theme }) => theme.colors.red};
  }
`

const StyledHeading = styled(StyledName)`
  font-size: 1.8em;
  line-height: 1.9em;
  font-weight: ${({ theme }) => theme.font.semi_bold}; 
  border: none;
`

const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-top: 1px solid black;   

  :first-child {
    border: none;
  }
`

const Category = (props) => {
  const { single_cat, getChildCat, depth, toggleVisibility, updateState, addToState, deleteCatFromState } = props;
  const [renderForm, setRenderForm] = useState(false);
  const [editOrAdd, setEditOrAdd] = useState("edit");
  const [renderConfirmation, setRenderConfirmation] = useState(false);

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
  ));

  const doHaveMoreChilds = () => {
    if (getChildCat(single_cat).length === 0) return false
    else return true
  };

  const findBiggestOrderingOfChilds = () => {
    const childs = getChildCat(single_cat);
    const maxOrdering = Math.max(...childs.map(cat => cat.ordering), -1);
    return maxOrdering;
  };

  return (
    <>
      {/* {single_cat.is_visible && ( */}
        <StyledWrapper>
          {single_cat.id === 1 ? (
            <>
              <StyledHeading>Kategorie: </StyledHeading>

              <StyledAddMainCatIcon onClick={() => { setRenderForm(!renderForm); setEditOrAdd("add"); }}>
                <FaRegPlusSquare />
              </StyledAddMainCatIcon>
            </>
          ) : (
              <>
                <StyledCatContainer depth={depth} onClick={() => toggleVisibility(single_cat)}>
                  <StyledName>
                    {doHaveMoreChilds() && (single_cat.childVisible ? <MdExpandMore /> : <MdChevronRight />)}
                    {single_cat.name}
                  </StyledName>
                  <StyledDescription>{single_cat.description}</StyledDescription>
                </StyledCatContainer>

                <StyledIcon onClick={() => { setRenderForm(!renderForm); setEditOrAdd("edit"); }}>
                  <FaRegEdit />
                </StyledIcon>

                <StyledDeleteIcon onClick={() => setRenderConfirmation(!renderConfirmation)}>
                  <FaRegTrashAlt />
                </StyledDeleteIcon>

                <StyledAddIcon onClick={() => { setRenderForm(!renderForm); setEditOrAdd("add"); }}>
                  <FaRegPlusSquare />
                </StyledAddIcon>
              </>
            )}

          {renderConfirmation &&
            <ConfirmationBox
              idToDelete={single_cat.id}
              catName={single_cat.name}
              deleteCatFromState={deleteCatFromState}
              closeConfirmation={() => setRenderConfirmation(!renderConfirmation)}
            />}

          {renderForm &&
            <Form
              single_cat={single_cat}
              closeForm={() => setRenderForm(!renderForm)}
              editOrAdd={editOrAdd}
              updateState={updateState}
              addToState={addToState}
              biggestOrderingOfChilds={findBiggestOrderingOfChilds()}
            />}
        </StyledWrapper>
      {/* )} */}

      {single_cat.childVisible && childs}
    </>
  )
}

Category.defaultProps = {
  depth: -1,
};

export default Category;