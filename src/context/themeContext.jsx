import React from 'react';

export const theme = {
  light: {
    backgroundColor: '#eae0d0',
    color: '#000',
  },
  dark: {
    backgroundColor: '#001529',
    color: '#fff',
  },
};

const ThemeContext = React.createContext(theme.light);

export default ThemeContext;
