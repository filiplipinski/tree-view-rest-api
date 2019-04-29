import styled from 'styled-components';

const Heading = styled.p`
  font-size: 1.8em;
  font-weight: ${({ theme }) => theme.font.semi_bold};
  border-bottom: 1px solid black;
  margin-bottom: 10px;
`

export default Heading;