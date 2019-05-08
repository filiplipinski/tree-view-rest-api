import styled from 'styled-components';


export const StyledForm = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(calc( 100% + 15px ));
  border-radius: 6px;
  padding: 30px 10px 10px;
  background-color: ${({ theme }) => theme.colors.title_bgc};
`
export const StyledInput = styled.input`
  font-family: 'Montserrat';
  border: none;
  display: block;
  margin: 2px auto;
  padding: 4px;
  color: black;
`
export const StyledInputSubmit = styled(StyledInput)`
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

export const StyledX = styled.button`
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

export const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 10px;
`