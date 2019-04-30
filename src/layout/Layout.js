import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme } from "../utils/theme";

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body{
    font-family: 'Montserrat';
    font-size: 1.6rem;
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