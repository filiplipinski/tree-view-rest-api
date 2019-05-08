import styled from 'styled-components'; 


export const StyledContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  transform: translate(calc( 100% + 15px ));
  border-radius: 6px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.title_bgc};
`
export const StyledText = styled.p`
  color: ${({ theme }) => theme.colors.title};
  margin-bottom: 10px;
  text-align: center;
`
export const Span = styled.span`
  font-size: 20px;
  text-decoration: underline;
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

export const StyledButton = styled.button`
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
`