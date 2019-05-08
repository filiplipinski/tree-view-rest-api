import React, { useState } from 'react';
import Form from '../Form/Form';
import ConfirmationBox from '../ConfirmationBox/ConfirmationBox';
import { StyledName, StyledDescription, StyledCatContainer, StyledIcon, StyledAddIcon, StyledAddMainCatIcon, StyledDeleteIcon, StyledHeading, StyledWrapper } from './CategoryStyles';
import { MdChevronRight, MdExpandMore } from 'react-icons/md';
import { FaRegEdit, FaRegPlusSquare, FaRegTrashAlt } from 'react-icons/fa';


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

  const biggestOrderingOfChilds = Math.max(...childs.map(cat => cat.props.single_cat.ordering), -1);

  const handleClick = (typeOfForm) => {
    setRenderForm(!renderForm);
    setEditOrAdd(typeOfForm);
  }

  return (
    <>
      {/* {single_cat.is_visible && ( */}
      <StyledWrapper>
        {single_cat.id === 1 ? (
          <>
            <StyledHeading>Kategorie: </StyledHeading>

            <StyledAddMainCatIcon onClick={() => handleClick("add")}>
              <FaRegPlusSquare />
            </StyledAddMainCatIcon>
          </>
        ) : (
            <>
              <StyledCatContainer depth={depth} onClick={() => toggleVisibility(single_cat)}>
                <StyledName>
                  {!!childs.length && (single_cat.childVisible ? <MdExpandMore /> : <MdChevronRight />)}
                  {single_cat.name}
                </StyledName>
                <StyledDescription>{single_cat.description}</StyledDescription>
              </StyledCatContainer>

              <StyledIcon onClick={() => handleClick("edit")}>
                <FaRegEdit />
              </StyledIcon>

              <StyledDeleteIcon onClick={() => setRenderConfirmation(!renderConfirmation)}>
                <FaRegTrashAlt />
              </StyledDeleteIcon>

              <StyledAddIcon onClick={() => handleClick("add")}>
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
            biggestOrderingOfChilds={biggestOrderingOfChilds}
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