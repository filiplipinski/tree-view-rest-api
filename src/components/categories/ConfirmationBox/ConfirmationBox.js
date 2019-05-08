import React from 'react';
import { StyledContainer, StyledText, Span, ButtonsWrapper, StyledButton  } from './ConfirmationBoxStyles';
 

const ConfirmationBox = (props) => {
  const { idToDelete, catName, deleteCatFromState, closeConfirmation } = props;


  return (
    <StyledContainer>
      <StyledText>Czy na pewno chcesz usunąć kategorie o nazwie: <Span>{catName}</Span>?</StyledText>

      <ButtonsWrapper>
        <StyledButton onClick={() => { deleteCatFromState(idToDelete); closeConfirmation(); }}>Usuń</StyledButton>
        <StyledButton onClick={() => closeConfirmation()}>Anuluj</StyledButton>
      </ButtonsWrapper>
    </StyledContainer>
  );
}

export default ConfirmationBox