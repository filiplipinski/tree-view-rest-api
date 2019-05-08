import styled from 'styled-components';

export const StyledName = styled.p`
  font-size: 1.5em;
  padding: 5px 40px 5px 0;
`

export const StyledDescription = styled.p`
  font-size: 1em; 
  color: ${({ theme }) => theme.colors.title_bgc};
  font-weight: ${({ theme }) => theme.font.thin};
  margin-bottom: 5px;
`

export const StyledCatContainer = styled.div`
  flex-grow: 1;
  padding-left: ${props => `${props.depth * 60}px`};  
  cursor: pointer;
  border-radius: 6px;

  :hover {
    background-color: ${({ theme }) => theme.colors.bgc_hover};
  }
`

export const StyledIcon = styled.div`
  font-size: 25px;
  margin-left: 10px;
  cursor: pointer;

  :hover{
    color:  ${({ theme }) => theme.colors.blue};
    transform: scale(1.2);    
  }
`
export const StyledAddIcon = styled(StyledIcon)`
  :hover{
    color:  ${({ theme }) => theme.colors.green};
  }
`
export const StyledAddMainCatIcon = styled(StyledAddIcon)`
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

export const StyledDeleteIcon = styled(StyledIcon)`
  :hover{
    color:  ${({ theme }) => theme.colors.red};
  }
`

export const StyledHeading = styled(StyledName)`
  font-size: 1.8em;
  line-height: 1.9em;
  font-weight: ${({ theme }) => theme.font.semi_bold}; 
  border: none;
`

export const StyledWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border-top: 1px solid black;   

  :first-child {
    border: none;
  }
`