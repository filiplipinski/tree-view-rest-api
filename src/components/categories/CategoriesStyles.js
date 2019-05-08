import styled from 'styled-components';

export const Container = styled.div`
  background-color: #eee;
  border: 1px solid black;
  border-radius: 6px;
  display: inline-block;
  min-width: 300px;
  padding: 0 10px;
  margin: 5vw 0 50px 5vw;
`

export const LoadingText = styled.p`
  font-size: 1.8em;
  line-height: 1.9em;
  font-weight: ${({ theme }) => theme.font.semi_bold}; 
`