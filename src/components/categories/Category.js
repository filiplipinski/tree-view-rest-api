import React from 'react';
import styled from 'styled-components';

const StyledName = styled.p`
  font-size: 1.5em;
  padding: 5px 0;
  text-decoration: underline;

  cursor: pointer;
  border-radius: 6px;

  :hover {
    background-color: ${({ theme }) => theme.colors.bgc_hover};
  }
`

const StyledDescription = styled.p`
  font-size: 1em;
  font-weight: ${({ theme }) => theme.font.thin};
  margin-bottom: 5px;
  border-bottom: 1px solid black;  
`

const StyledCatContainer = styled.div`
  margin-left: ${props => `${props.depth * 60}px`};
`

const Category = (props) => {
  const { single_cat, getChildCat, depth, toggleVisibility } = props;

  const childs = getChildCat(single_cat).map(child => (
    <Category
      key={child.id}
      single_cat={child}
      getChildCat={getChildCat}
      toggleVisibility={toggleVisibility}
      depth={depth + 1}
    />
  ))

  return (
    <>
      <StyledCatContainer depth={depth}>
        <StyledName onClick={() => toggleVisibility(single_cat)}>
          {single_cat.name}
        </StyledName>
        <StyledDescription>{single_cat.description}</StyledDescription>
      </StyledCatContainer>

      {single_cat.childVisible && childs}
    </>
  )
}

Category.defaultProps = {
  depth: 0,
};

export default Category;