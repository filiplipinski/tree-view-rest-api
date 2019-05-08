import styled from 'styled-components';

const Header = styled.h1`
  font-size: 3em;
  font-weight: ${({ theme }) => theme.font.bold};
  background-color: ${({ theme }) => theme.colors.title_bgc};
  text-align: center;
  padding: 2% 0;
  color: ${({ theme }) => theme.colors.title};
`
export default Header;