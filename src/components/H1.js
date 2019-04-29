import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 3em;
  font-weight: ${({ theme }) => theme.font.bold};
  background-color: ${({ theme }) => theme.colors.title_bgc};
  text-align: center;
  padding: 2% 0;
  color: ${({ theme }) => theme.colors.title};
  /* text-transform: uppercase; */
  border-bottom: 2px solid black;
`
export default H1;