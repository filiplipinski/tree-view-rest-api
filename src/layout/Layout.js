import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from "../utils/theme";

const GlobalStyle = createGlobalStyle`
  body{
    font-family: 'Montserrat';
  }
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`

const StyledWrapper = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.white};
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>
        {children}
      </StyledWrapper>
    </>
  </ThemeProvider>
);

export default Layout;