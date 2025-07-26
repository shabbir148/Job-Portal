// src/styles/GlobalStyles.js
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text.primary};
    transition: background-color ${props => props.theme.transitions.normal},
                color ${props => props.theme.transitions.normal};
    line-height: 1.6;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: inherit;
    transition: all ${props => props.theme.transitions.fast};
    
    &:focus-visible {
      outline: 2px solid ${props => props.theme.colors.primary};
      outline-offset: 2px;
    }
  }

  input, textarea {
    font-family: inherit;
    transition: all ${props => props.theme.transitions.fast};
    
    &:focus {
      outline: none;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: all ${props => props.theme.transitions.fast};
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* Scrollbar styling */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${props => props.theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.full};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${props => props.theme.colors.text.muted};
  }

  /* Custom selection color */
  ::selection {
    background: ${props => props.theme.colors.primary};
    color: white;
  }

  /* Utility classes */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  /* Loading animations */
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes slideInFromLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  /* Responsive text sizes */
  .text-responsive {
    font-size: ${props => props.theme.fontSize.base};
    
    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: ${props => props.theme.fontSize.lg};
    }
    
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: ${props => props.theme.fontSize.xl};
    }
  }

  .heading-responsive {
    font-size: ${props => props.theme.fontSize['2xl']};
    
    @media (min-width: ${props => props.theme.breakpoints.mobile}) {
      font-size: ${props => props.theme.fontSize['3xl']};
    }
    
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: ${props => props.theme.fontSize['4xl']};
    }
    
    @media (min-width: ${props => props.theme.breakpoints.desktop}) {
      font-size: ${props => props.theme.fontSize['5xl']};
    }
  }
`;